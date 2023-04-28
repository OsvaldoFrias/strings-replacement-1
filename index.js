const port = process.env.PORT || 3000;

const express = require('express');
const path = require('path');

var i18n = require("i18n-express");

const routerApp = require('./routers');

const app = express();

// Middlewares
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(i18n({
  defaultLang: 'es',
  siteLangs: ["es", "en"],
  textsVarName: 'translation',
  translationsPath: path.join(__dirname, 'i18n'),
}));

app.use('/public', express.static(path.join(__dirname, 'public')));

routerApp(app);

app.listen(port, () => {
  console.log('Server started at port: ' + port);
});