const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");


const erorController = require('./controllers/errorController')

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));


app.use("/admin",adminRouter);
app.use(shopRouter);

app.use(erorController.error404);


app.listen(8080);