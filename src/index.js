const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override')
const { engine } = require('express-handlebars');
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db')

// Connect DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    helpers: {
      sum: (a, b) => a + b
    }
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
