const pkg = require("pg");
const { Client } = pkg;
const dotenv = require("dotenv");

dotenv.config();
credentials = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

exports.sendQuery = async (req, res) => {
  const { name, email, mobile, message } = req.body;
  const client = new Client(credentials);
  let query = `INSERT INTO public.queries (name,email,mobile,message) VALUES ('${name}','${email}',${mobile},'${message}') returning id`;
  client.connect();
  let result = client
    .query(query)
    .then((resp) => {
      client.end();
      res.status(200).send({
        status: true,
        msg: "Your query is sucessfully submitted",
        data: resp?.rows[0],
      });
    })
    .catch((err) => {
      client.end();
      console.log(err);
      res.status(500).send({
        status: false,
        msg: "Something went wrong",
        // data: resp?.rows[0],
      });
    });
};
