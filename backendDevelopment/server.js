require("dotenv").config();

const express = require("express");
let port = 4000;
let app = express();
app.listen(process.env.PORT, () => {
  console.log("server at port", port);
});


app.get("/", (req, res) => {
  res.send("done ");
});

app.get("/october", (req, res) => {
  res.send("it is october");
});

app.get("/festival", (req, res) => {
  res.send("<h1 >Dussehra, Diwali</h1>");
});


