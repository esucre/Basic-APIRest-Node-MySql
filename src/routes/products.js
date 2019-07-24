const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/',(req,res)=>{
    const query = `
        select * from Products
    `;
    mysqlConnection.query(query,(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }
        else{
            res.json({Status: 'Error al recuperar la informacion'});
        }
    });
});


module.exports = router;