var express = require("express");

var app = express();

app.get("/",(req,res) =>{
  res.send("<html><body><h1>Hello world</h1>");
  res.send("<h2>How are you?</h2></body></html>");
});
  app.listen(process.env.PORT);
