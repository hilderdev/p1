import Express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import env from 'dotenv'
import router from './routes'
import Rate from './models/rate'


const app = Express();

env.config();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(process.env.API_BASE,router);

app.get(process.env.API_BASE, (req, res) => {
    res.send(JSON.stringify('Api mi tasa de cambio', null, 2))
});

mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Conexion exitosa')
});

app.listen(3500, () => { });
