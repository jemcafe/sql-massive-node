const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const productsCntrls = require('./controllers/products_controller');

const app = express();
app.use( bodyParser.json() );
app.use( cors() );


massive( process.env.CONNECTION_STRING ).then(
    ( dbInstance ) => {
        app.set('db', dbInstance);
    }
).catch( err => console.error( err ) );


app.get(`/api/products`, productsCntrls.getAll);
app.get(`/api/product/:id`, productsCntrls.getOne);
app.put(`/api/product/:id`, productsCntrls.update);
app.post(`/api/product`, productsCntrls.create);
app.delete(`/api/product/:id`, productsCntrls.delete);


const port = process.env.PORT || 3000;
app.listen( port, () => { console.log(`Listeing on port: ${port}`) } );