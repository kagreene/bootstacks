const express = require('express');
const sequelizeConnection = require('./connection');
const User = require('./models/User'); // This is the User model
const app = express();
app.use(express.static('public'));
sequelizeConnection.sync().then(()=>{
    app.listen(3000, function() {
        console.log('Server is running on port 3000');
    });
})
