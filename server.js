const express = require('express');
const sequelizeConnection = require('./connection');
const User = require('./models/User'); // This is the User model
const app = express();
app.use(express.static('public'));
app.get('/signin', function(req, res) {
    res.sendFile(__dirname + '/public/signin.html');
});
sequelizeConnection.sync().then(()=>{
    app.listen(3000, function() {
        console.log('Server is running on port 3000');
    });
})
