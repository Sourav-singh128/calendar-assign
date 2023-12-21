const express = require("express");
const app = express();
const port = 8001;
const connectDb = require("./db.js");
app.use(express.json());
const CalDate = require("./schema/dateSchema.js");
connectDb();
app.get("/api", async (req, res, next) => {
  console.log("hitting-api");
  res.status(200).send({ message: "success" });
});

app.post("/newDate", async (req, res, next) => {
  const { id, date, attendance } = req.body;
  console.log("date ", date, " attendance ", attendance);
  const dateObj = new CalDate({ _id: id, date: date, attendance: attendance });
  const data = await dateObj.save();
  console.log("dateObj ", data);
});

app.post("/findDate", async (req, res, next) => {
  const { dateValue } = req.body;
  console.log("date-val ", dateValue);
  try {
    const findDate = await CalDate.findById(dateValue);
    console.log("find-date ", findDate);
    res.status(200).send(findDate);
  } catch {
    res.send(400).send("unable to fetch date.");
  }
});

app.post("/updateDate", async (req, res, next) => {
  console.log("hitting-update");
  const { value, date } = req.body;
  console.log("val-status ", value);
  try {
    const updateDate = await CalDate.findOneAndUpdate(
      { _id: date },
      { attendance: value }
    );
    console.log("update-date ", updateDate);
    res.status(200).send(updateDate);
  } catch {
    res.send(400).send("unable to fetch date.");
  }
});
app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
