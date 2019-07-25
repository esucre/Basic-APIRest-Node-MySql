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
            console.log(err);
            res.json({Status: 'Error al recuperar la informacion'});
        }
    });
});

router.get('/:id',(req,res)=>{
    const {id} = req.params;
    const query =`
        select * from Products where id_Product = ?
    `;
    mysqlConnection.query(query,[id],(err,rows,fields)=>{
        if(!err){
            if(rows[0] == null){
            console.log(err);
            res.json({Status: 'No existe el producto solicitado'})
            }
            else{                
            res.json(rows[0]);
            }
        }
        else{
            console.log(err);
            res.json({Status: 'Error al recuperar la informacion'})
        }
    });
});

router.post('/',(req,res)=>{
    const {id,name,price} = req.body;
    const query = `
        Insert into Products Values (?,?,?)
    `; 

    if(name && price !== null){
        parseFloat(price);
        parseInt(id);
        if(isNaN(price) || isNaN(id)){
            res.json({Status: 'Favor ingrese el tipo de dato correcto'});
        }
        else{
            mysqlConnection.query(query,[id,name,price],(err,rows,fields)=>{
                if(!err){
                    res.json({Status: 'Product Saved'})
                }
                else{
                    console.log(err);
                    res.json({Status: 'Error saving product'})
                }
                
            });

        }
    }
    
  
});


module.exports = router;