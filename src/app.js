import path from 'path';
import express from 'express';
import { engine } from 'express-handlebars'
import { __dirname } from './utils/utils.js';

const PORT = 3000;

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
    res.setHeader('Content-Type', 'text/html');
    res.status(200).render('home', {
        style: "./css/home.css"
    });
})
app.get('/products', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).render('products', {
        style: "./css/products.css",
        header:true
    });
})
app.get('/contact', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).render('contact', {
        style: "./css/contact.css"
    });
})

const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error', (error) => console.log(error));
