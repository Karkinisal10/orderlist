const express =  require("express");
const path = require("path");
const hbs = require("hbs");
const mongoose = require("mongoose");
const { url } = require("inspector");
const app = express();

const deliverymodels = require("./models/deliveryschema")

//static path for css
const static_path =path.join(__dirname,"./public");
app.use(express.static(static_path));

//middleware
app.use(express.urlencoded({extended : true}));


//view engine
app.set('views',path.join(__dirname,"views"));
app.set("view engine", "hbs");


//routes
app.use(require("./routes/index"));
app.use(require("./routes/deliverydb"));



app.get("/",(req,res) => {
    res.render("index");

});

//database connecting
mongoose.connect('mongodb://127.0.0.1:27017/deliverylist', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));



//creaing server
app.listen(80,()=>{
    console.log("Server is running");
})