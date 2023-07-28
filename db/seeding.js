const pool = require('../queries.js');
const fs = require('fs');

const seedQuery = fs.readFileSync('db/seeding.sql', 'utf-8');
pool.query(seedQuery, (err, result) => {
    if (err){
        console.log(err);
    }
    console.log('Seed implemented');
    pool.end();
})