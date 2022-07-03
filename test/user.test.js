const assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
chai.use(chaiHttp);
describe("User", function () {
  const user = {
    email: "mayur.t@boppotechnologies.com",
    password: "12456789",
    name: "Mayur Thosar",
  };
  describe("Register User", function () {
    it("should register a user", (done) => {
      console.log("Registrering user to db");
      chai
        .request("http://localhost:3000")
        .post("/api/user/")
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          console.log("Response Body:", res.body);
          done();
        });
    });
  });
  /// some other tests we will write here
});
