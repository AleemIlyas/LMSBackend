const { json } = require('express');
const express = require('express');
require('./src/db/db')
const cors = require('cors')
const contactRoutes = require('./src/routers/StudentRouter');
const communication = require('./src/routers//contactRouter')
const admin = require('./src/routers/adminsRouter');

const app = express();
const port = process.env.PORT || 3000;

app.use( cors({
    origin : '*'
}) )
app.use( express.json() )
app.use(express.urlencoded({extended: true}));
app.use(contactRoutes)
app.use(communication)
app.use(admin)

app.listen(port , ()=>{
    console.log('server is on!');
})
