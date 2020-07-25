const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "build/index.html"));
});

app.listen(PORT, function () {
  console.log("App listening on PORT:", PORT);
});