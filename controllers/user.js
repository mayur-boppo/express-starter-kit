const config = require("../config/config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const _responseHelper = require("../helper/response");
const { HttpStatus } = require("../constants/httpstatus");
const userManager = require("../services/user.js");
exports.register = async (req, res) => {
  // Validate data
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
  });
  const { error, value } = await schema.validate(req.body);
  if (error) {
    res
      .status(HttpStatus.BAD_REQUEST)
      .send(`${error.details.map((x) => x.message).join(", ")}`);
  } else {
    req.body = value;
    next();
  }

  try {
    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashPassword;
    const saveUser = await userManager.register(req.body);
    res.status(200).send({ saveUser });
  } catch (err) {
    console.log(err);
  }
};
exports.login = async (req, res) => {
  User.findOne({ email: req.body.email }, async (err, user) => {
    if (err) {
      console.log(err);
    } else {
      if (user) {
        const validPass = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (!validPass)
          return res.status(401).send("Mobile/Email or Password is wrong");

        // Create and assign token
        let payload = { id: user._id, user_type_id: user.user_type_id };
        const token = jwt.sign(payload, config.TOKEN_SECRET);

        res.status(200).header("auth-token", token).send({ token: token });
      } else {
        res.status(401).send("Invalid mobile");
      }
    }
  });
};
