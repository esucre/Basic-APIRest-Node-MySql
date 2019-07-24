const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//Get all data from table
router.get('/',(req,res)=>{
    mysqlConnection.query('select * from Employees',(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }
        else{
            console.log(err);
        }
    });
});

//Get specific data from the table using ID
router.get('/:id',(req,res)=>{
    const { id } = req.params;
    mysqlConnection.query('select * from Employees where id = ?',[id],(err,rows,fields) =>{
        if(!err){
            res.json(rows[0]);
        }
        else{
            console.log(err);
        }
    });
});


//Insert data in table
router.post('/',(req,res) =>{
    const query = `
    insert into Employees (name,salary) values (?,?)
    `;
    const {name,salary} = req.body;
    if(name && salary !== null){
     parseInt(salary);
      if(isNaN(salary)){
        res.json({Status: 'Favor ingrese el tipo de dato correcto'});
      }

      else{
        mysqlConnection.query(query,[name,salary],(err,rows,fields) =>{
            if(!err){
                res.json({Status: 'Employee Saved '});
            }
            else{
                console.log(err);
            }
    
        });
      }        
    }
    else{
        res.json({Status: 'Favor rellene todos los campos necesarios'});
    }
    
    
});

//Update data in the table with the id employee
router.put('/:id',(req,res) =>{
    const {name,salary} = req.body;
    const {id} = req.params;
    const query = `
    UPDATE Employees SET name =?, salary = ? WHERE id = ?
    `;
    if(name && salary !== null){
        parseInt(salary);
        if(isNaN(salary)){
          res.json({Status: 'Favor ingrese el tipo de dato correcto'});
        }
        else{
            mysqlConnection.query(query,[name,salary,id],(err,rows,fields) =>{
                if(!err){
                    res.json({Status: 'Employee Update'});
                }
                else{
                    console.log(err);
                }
        
            });
        }      
    }
    else{
        res.json({Status: 'Favor rellene todos los campos necesarios para la actualizacion'});
    }
});

//Delete a employee in the table using an employee id
router.delete('/:id',(req,res) =>{
    const {id} = req.params;
    const query = `
    Delete from Employees where id = ?
    `;    
    mysqlConnection.query(query,[id],(err,rows,fields) =>{
        if(!err){
            res.json({Status: 'Employee Delete'});
        }
        else{
            console.log(err);
        }
    
        });
    

});



module.exports = router;