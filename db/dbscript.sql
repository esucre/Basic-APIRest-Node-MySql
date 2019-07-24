create database if not EXISTS Company;
use Company;
Create table Employees(
	id int (11) not null AUTO_INCREMENT,
	name varchar(40) not null,
	salary int(11)  not null,
    
    CONSTRAINT PK_Employees PRIMARY Key(id)
);

DESCRIBE Employees;


use Company;
Insert into Employees Values (1,"Roderick",1000),
 (2,"Aldair",800),
 (3,"Jamal",900),
 (4,"Kevin",1400),
 (5,"Deiby",1200),
 (6,"Roger",1100);


 use Company;
create table Products
(
	id_Product int not null,
    product_Name varchar(30) not null,
    product_Price float not null,
    
    Constraint PK_Products PRIMARY KEY (id_Product)


);

DESCRIBE Products;

use Company;
insert into Products Values 
(1874,"Refrigerators",1500.24),
(5478,"SmartTV",1000.32),
(6984,"WashingMachines",850.00);






