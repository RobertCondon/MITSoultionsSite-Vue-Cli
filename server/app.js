const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');

const config = require('./config/config');
/*const https = require("https"),
    fs = require("fs");
const options = {
    key: fs.readFileSync("/etc/letsencrypt/live/manageit.nz/privkey.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/manageit.nz/fullchain.pem") // thes
};*/


const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());
//View Engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
require('./routes')(app);
sequelize.sync()
    .then(() => {
        app.listen(process.env.PORT || 8081);
        //https.createServer(options,app).listen(process.env.PORT || 8081);
        console.log(`Server started on port ${config.port}`)

    });



console.log("Listening");

