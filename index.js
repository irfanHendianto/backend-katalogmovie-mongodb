const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movies-routes')
const connectionDB = require('./db.js')


const app = express();
connectionDB()
app.use(express.json());
app.use(cors());
app.get("/",(req,res) => res.send("Hello"))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use(`/api`, movieRoutes.routes);




app.listen(config.port, () => console.log("App Listening on url http://localhost:" + config.port));

