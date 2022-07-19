const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebar = require('express-handlebars');
const app = express();
const port = 3000;
const db = require('./config/db')
// connect db
db.connect();
const route = require('./routes');
app.use(express.static(path.join(__dirname, 'public')));

      app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
// HTTTP loggger

app.use(morgan('combined'));
// Template Engine
app.engine(
  'hbs',
  handlebar.engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
// set view handlerbar
app.set('views', path.join(__dirname, 'resource', 'views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
