let express = require('express');
let bodyParser = require('body-parser');
require('dotenv').config();
let indexRoute = require('./route/index');
var flash = require('connect-flash');
var session = require('express-session')


let app = express();
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
app.use(flash())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('views',__dirname+'/views');
app.set('view engine',"jade")
let PORT = process.env.PORT || 3001;
// REGISTER OUR ROUTES
app.use('/',indexRoute);
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})


