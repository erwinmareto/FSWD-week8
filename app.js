const express = require("express");
const app = express();
const routes = require("./routes/index.js")

app.use(routes);

app.listen(3000);
