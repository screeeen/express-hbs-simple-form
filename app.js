const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.use(express.static(path.join(__dirname, "public")));

app.get("/search/:name/:city", (req, res) => {
  console.log("req.params", req.params);
  console.log("req.query", req.query);

  res.send();

});

app.get('/', (req, res) => {
  res
    .status(200)
    .render('index')
});

app.get('/formdata', (req, res, next) => {
  console.log('/formdata --> ', req.query);
  
  res.send();
});




app.listen(3000);
