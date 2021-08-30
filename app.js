const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/home", (request, response) => {
  response.sendFile(__dirname + "/view/home.html");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/view/about.html");
});

app.get("/works", (request, response) => {
  response.sendFile(__dirname + "/view/works.html");
});

app.get("/photos", (request, response) => {
  response.sendFile(__dirname + "/view/photogallary.html");
});

app.listen(3000, () => console.log("listening on port 3000"));
