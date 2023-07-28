const express = require("express");
const router = express.Router();
const pool = require('../queries.js');


router.get("/", (req, res) => {
    const query = "SELECT * FROM film";
    pool.query(query, (err, result) => {
      if (err) {
        throw err;
      }
      // res.send(result);
      res.status(200).json(result.rows)
    })
  });
  
  router.get("/:id", (req, res) => {
    const {id} = req.params;
    const query =  `SELECT * FROM film WHERE film_id = $1`;
    pool.query(query, [id],(err, result) => {
        if (err) {
          throw err;
        }
        else{
          if (result.rows.length === 0){
            res.status(404).json({message: "Not Found"})
          }
          // res.send(result);
          res.status(200).json(result.rows[0])
        }
      }
    );
  });


  router.get("/categories/:category", (req, res) => {
    const {category} = req.params;
    // Turn the category into title case (the data in the database in written in title case)
    // const category = categoryName.toLocaleLowerCase().split(' ').map((word) => {
    //   return (word.charAt(0).toUpperCase() + word.slice(1))
    // });
  
    const query = `SELECT * 
                      FROM film 
                    INNER JOIN film_category 
                      ON 
                      film_category.film_id = film.film_id 
                    INNER JOIN category 
                      ON 
                      category.category_id = film_category.category_id 
                    WHERE category.name = $1`
  
    pool.query(query, [category], (err, result) => {
        if (err) {
          throw err;
        }
        if (result.rows.length === 0){
          res.status(404).json({message: "Not Found"});
        }
        else{
          res.status(200).json(result);
        }
      }
    );
  });
  

module.exports = router;
