const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static("build"));

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "build/index.html"));
});

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!!`)
);