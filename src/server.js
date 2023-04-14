const path = require("path");
const express = require("express");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../index.html"));
});

app.use("/", router);
app.listen(process.env.port || 3000);
