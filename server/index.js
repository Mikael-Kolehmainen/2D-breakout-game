const { saveUserTime } = require("./src/saveUserTime");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/save-user-time", async (req, res) => {
  await saveUserTime(req.body.username, req.body.time);
});

app.listen(PORT, () => {
  console.log(`Server listening to ${PORT}`);
});
