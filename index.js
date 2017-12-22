const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

massive( process.env.CONNECTION_STRING ).then(
        ( dbInstance ) => {
            app.set('db', dbInstance);
        }
    ).catch( err => console.error( err ) );

const port = process.env.PORT || 3000;
app.listen( port, () => { console.log(`Listeing on port: ${port}`) } );