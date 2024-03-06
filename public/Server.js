const express = require('express');
const path = require('path');
const app = express();
app.use(path());

const PORT = process.env.PORT || 3000;

path.connect("https//localhost:3000/login");

app.use('/login', (req, res) => {
    LoginModel.create(req.body)
    .then(login=> res.json(login))
    .catch(err=> res.json(err))
    res.send({
      token: 'test123'
    });
    app.listen(3000, ()=>{
console.log("server is running")
    }); 
  })