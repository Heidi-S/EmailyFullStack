const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
//maxAge: how long this cookie can exist in browser before automatically
//expired. unit in millisecond.
//keys: used to encrypt our cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

//if there is an environment variable defined by HEROKU, assign this variable
//to port, otherwise use default port 5000 (for development environment)
//Use all capital letters for PORT because this value seldom changes.
const PORT = process.env.PORT || 5000;
app.listen(PORT);

//localhost:5000
