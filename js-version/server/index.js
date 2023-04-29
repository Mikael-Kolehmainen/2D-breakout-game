const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { saveUserTime, getUserTimes } = require("./src/userTimes");

const PORT = 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/save-user-time", async (req, res) => {
  await saveUserTime(req.body.username, req.body.time);
});

app.get("/get-user-times", async (req, res) => {
  const userTimes = await getUserTimes();
  res.send(userTimes);
});

app.listen(PORT, () => {
  console.log(`Server listening to ${PORT}`);
});
