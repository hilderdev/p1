import Express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import router from './routes'
import Rate from './models/rate'
const app = Express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/api/v1/',router);

app.get('/api/v1/', (req, res) => {
    res.send(JSON.stringify('Api mi tasa de cambio', null, 2))
});

mongoose.connect('mongodb://localhost/mtc');
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Conexion exitosa')
});

app.listen(3500, () => { });
