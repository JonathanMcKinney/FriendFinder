var express = require('express');

var app = express();

var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require('./app/routing/apiRoutes');
require('./app/routing/htmlRoutes');

app.listen(PORT, function(){
    console.log("Listening on Port: " + PORT);
})