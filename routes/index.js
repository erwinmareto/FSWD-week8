const express = require("express");
const router = express.Router();
// const pool = require('../queries.js');
const filmsRouter = require('./films.js')
const categoriesRouter = require('./categories.js')

router.use("/films", filmsRouter);
router.use("/categories", categoriesRouter);

module.exports = router;
