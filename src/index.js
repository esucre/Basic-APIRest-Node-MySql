const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//Routes
app.use('/api/employees',require('./routes/employees'));
app.use('/api/products',require('./routes/products'));


//Starting server
app.listen(app.get('port'), ()=>{
    console.log("server en puerto", app.get('port'));
});