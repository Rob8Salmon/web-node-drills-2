require("dotenv").config();
const Sequelize = require("sequelize");
const { CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  //remember module exports, memorize syntax and know it takes in 2 arguments, also pull this up to alex and have him go over it
  getInput: (req, res) => {
    sequelize
      .query("select * FROM input")
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log("error with getInput Handler", err));
  },
  createInput: (req, res) => {
    let { text } = req.body;

    sequelize
      .query(
        `
            INSERT INTO input (text)
             VALUES ('${text}');
        `
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log("Posting", err));
  },
};
