import path from 'path';
import express from 'express';
import { engine } from 'express-handlebars';
import { __dirname } from './utils/utils.js';
import { config } from './config/config.js';

const PORT = config.app.port || 3000;

const app = express();

app.engine('handlebars', engine({
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
  }
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.render('home', {
    style: "/css/home.css"
  });
});

app.get('/products', (req, res) => {
  res.render('products', {
    style: "/css/products.css",
    header: true
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    style: "/css/contact.css"
  });
});

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

server.on('error', (error) => console.log(error));
