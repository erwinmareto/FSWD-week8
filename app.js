const express = require("express");
const app = express();
const pool = require("./queries.js");
const routes = require("./routes/index.js")

app.use(routes);

app.listen(3000);
