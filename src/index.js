import express from 'express'
import morgan from 'morgan'
import { engine } from 'express-handlebars'
import {join,dirname} from 'path'
import {fileURLToPath} from 'url'

//Initializacion
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//Settings
app.set('port', process.env.PORT || 3000);
//Configurando carpeta para las vistas
app.set('views', join(__dirname, 'views'));
// Configurando el motor de plantillas predeterminado
app.set('view engine', 'hbs');

//Configurando el motor de plantillas
app.engine('hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

//Middlewares
app.use(morgan('dev'));
//Utilizaremos express para trabjar con interfaces y formularios
//Utilizaremos express para trabajar con archivos tipo Json
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.render('index');
});

//Publics Files
//Funcion Join,public los usuarios pueden utilizar lo que hay en la carpeta public
app.use(express.static(join(__dirname, 'public')));

//Run Server
app.listen(app.get('port'), () => {
    console.log('cargando el puerto', app.get('port'));
}); 