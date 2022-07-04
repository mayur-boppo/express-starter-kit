const swaggerAutogen = require("swagger-autogen")();

const dotenv = require("dotenv");
dotenv.config();
const outputFile = "./swagger_output.json";
const endpointsFiles = ["./routes/index.js"];

const doc = {
  info: {
    version: "1.0.0", // by default: '1.0.0'
    title: "Authentication Service REST APIS", // by default: 'REST API'
    description: "Authentication Service REST APIS", // by default: ''
  },
  host: process.env.APP_HOST, // by default: 'localhost:3000'
  basePath: "/api", // by default: '/'
  schemes: [], // by default: ['http']
  consumes: ["application/json"], // by default: ['application/json']
  produces: ["application/json"], // by default: ['application/json']
  tags: [
    // by default: empty Array
    {
      name: "Authentication", // Tag name
      description: "", // Tag description
    },
    // { ... }
  ],
};

swaggerAutogen(outputFile, endpointsFiles, doc);
