const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;
const cluster = "cluster0";
const dbname = "assignment";
const clusterSuff = "wpytuo5";
const connectDb = async () => {
  console.log("username ", username, "pass ", password);
  const uri = `mongodb+srv://${username}:${password}@${cluster}.${clusterSuff}.mongodb.net/${dbname}?retryWrites=true&w=majority`;

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", (error) => {
    console.log(error);
  });
  db.once("open", () => {
    console.log("connected successfully");
  });
};

module.exports = connectDb;
