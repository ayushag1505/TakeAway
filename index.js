const express = require('express') ;
const app = express() ;
const mongoose = require('mongoose') ;
const EjsMate = require('ejs-mate') ;
const path = require('path') ;

// Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/takeaway')
.then(()=>{
    console.log('DB Connected');
})
.catch(()=>{
    console.log('Something Went Wrong');
})

app.engine('ejs', EjsMate) ;
app.set('view engine', 'ejs') ;
app.set('views', path.join(__dirname, 'views')) ;

app.use(express.static(path.join(__dirname, 'public'))) ;

// app.get('/home', (req, res)=>{
//     res.render('products/home') ;
// })

app.get('*', (req, res)=>{
    res.send('hello') ;
})

app.listen(3000, ()=>{
    console.log('Port Connected') ;
})