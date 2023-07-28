const express = require("express");
const router = express.Router();
const filmsRouter = require('./films.js')
const categoriesRouter = require('./categories.js')

router.use("/films", filmsRouter);
router.use("/categories", categoriesRouter);

module.exports = router;
