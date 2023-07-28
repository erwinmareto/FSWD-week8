const express = require("express");
const router = express.Router();
const pool = require('../queries.js');


router.get("/", (req, res) => {
    pool.query(`SELECT name FROM category`, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  });

module.exports = router;
