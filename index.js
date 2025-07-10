const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "📦 Executable is working!" }).status(200);
});

app.listen(4000, () => {
  console.log("🚀 App is running on PORT:4000");
});
