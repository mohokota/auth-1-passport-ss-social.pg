import "dotenv/config" ;
import express from "express";
import pg from "pg";

const app = express();
const port = 3033;

const db = new pg.Client({
  host: process.env.PG_HT,
  port: process.env.PG_PT,
  database:  process.env.PG_DB,
  user: process.env.PG_UR,
  password: process.env.PG_PW
})
db.connect();

app.set("views", "views")
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get("/", function(req, res){
  res.render("home");
});
app.get("/signin", function(req, res){
  res.render("signin");
});
app.get("/signup", function(req, res){
  res.render("signup");
});
app.get("/secrets", function(req,res){
  try {
    console.log(req.user)
    res.render("dashboard")
  } catch(err){
    console.log(err.message)
  }
})


app.post("/register", function(req, res){
 
});

app.listen(port, function() {
  console.log(`Listening on ${port}.`);
});