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


// var db=mysql.createConnection ({
//     host: 'localhost',
//     user:'root',
//     database: 'aarg',

// })
// db.connect(function(err){
//     if(err){
//         throw err;
//     }
//     console.log('Connected to Database!');
// });
// global.db=db;

// let query="CREATE DATABASE arg;
// CREATE TABLE IF NOT EXISTS `users` (
//   `id` int(5) NOT NULL AUTO_INCREMENT,
//   `name` varchar(255) NOT NULL,
//   `stid` varchar(255) NOT NULL,
//   `boos` varchar(255) NOT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1";

// var db=mysql.createConnection ({
//     host: 'localhost',
//     user:'root',
//     database: 'aarg',

// })
// db.connect(function(err){
//     if(err){
//         throw err;
//     }
//     console.log('Connected to Database!');
// });
// global.db=db;

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    
  });
  
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    db.query("CREATE DATABASE IF NOT EXISTS lib", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });
  global.db=db;
  var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'lib'
  });
   
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE IF NOT EXISTS users (id int(5) NOT NULL AUTO_INCREMENT,name varchar(255) NOT NULL,stid varchar(255) NOT NULL,boos varchar(255) NOT NULL,PRIMARY KEY (id)) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1";
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });
  global.db=db;
 
app.get('/', showUser);
app.get('/add',addUserPage);
app.post('/add',addUser);
app.get('/edit:id',editUserPage);
app.post('/edit:id',editUser);
app.get('/delete:id',deleteUser);


app.listen(8080);
