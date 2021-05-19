require("dotenv").config();
const express = require("express");
var serveIndex = require("serve-index");
const authMiddelware = require("./authMiddelware");
const rotate = require("./rotate");
const app = express();
const port = process.env.PORT || 3000;

rotate();

app.use(authMiddelware);

app.use(
  "/",
  express.static(process.env.ROTATE_LOG_DIR),
  serveIndex(process.env.ROTATE_LOG_DIR, { icons: true })
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
