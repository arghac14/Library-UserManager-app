var express= require('express');
var bodyParser= require('body-parser');
var mysql=require('mysql');
var url=require('url');

var app=express();
// var urlencodedParser=bodyParser.urlencoded({extended:false});

var {showUser} = require('./routes/index');
var {addUserPage,addUser,editUser,editUserPage,deleteUser}= require('./routes/data');

app.set("view engine","ejs");
app.use(express.static("assets"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


var db=mysql.createConnection ({
    host: 'localhost',
    user:'root',
    database: 'aarg',

})
db.connect(function(err){
    if(err){
        throw err;
    }
    console.log('Connected to Database!');
});
global.db=db;



app.get('/', showUser);
app.get('/add',addUserPage);
app.post('/add',addUser);
app.get('/edit:id',editUserPage);
app.post('/edit:id',editUser);
app.get('/delete:id',deleteUser);


app.listen(3000);