const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
});

//if there is an environment variable defined by HEROKU, assign this variable
//to port, otherwise use default port 5000 (for development environment)
//Use all capital letters for PORT because this value seldom changes.
const PORT = process.env.PORT || 5000;
app.listen(PORT);

//localhost:5000
