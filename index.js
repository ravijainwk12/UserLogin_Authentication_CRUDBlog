const express = require('express');   
const app = express();
const router = require('./src/routes/log_routes');
const post_login_routes = require('./src/routes/post_login_routes');
const  Schema = require('./src/models/login_schema');
const post_login_schema= require('./src/models/post_login_schema');
const PORT =process.env.PORT||3050 ; 
const SECRET_KEY = 'secret_key';
const bcrypt = require('bcrypt');
app.use("/", express.static(__dirname + "/public" ));

/////////////////////////////////////////////////middleware
app.use(express.json());

////////////////////////////////////////////////routes
app.use('/',router);
app.use('/',post_login_routes);
/////////////////////////////////////////////// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

/////////////////////////////////////////////////MONGODB CONNECTION////////////////////////////////////////////////////

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/USERLOGINCRUD', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('ERROR :', err);
});

