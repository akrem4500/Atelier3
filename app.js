var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log("des modifications dans rzg");

console.log("des modifications dans main");
function isEven(number) {
  return number % 2 === 0;
}

// Méthode pour vérifier si un nombre est impair
function isOdd(number) {
  return number % 2 !== 0;
}

// Méthode pour calculer la racine carrée d'un nombre
function calculateSquareRoot(number) {
  if (number < 0) {
    throw new Error('Le nombre doit être positif.');
  }
  return Math.sqrt(number);
}

// Exemple d'utilisation des méthodes
const num1 = 10;
const num2 = 7;
const num3 = 16;

console.log(`Le nombre ${num1} est-il pair ?`, isEven(num1)); // Output: Le nombre 10 est-il pair ? true
console.log(`Le nombre ${num1} est-il impair ?`, isOdd(num1)); // Output: Le nombre 10 est-il impair ? false

console.log(`Le nombre ${num2} est-il pair ?`, isEven(num2)); // Output: Le nombre 7 est-il pair ? false
console.log(`Le nombre ${num2} est-il impair ?`, isOdd(num2)); // Output: Le nombre 7 est-il impair ? true

console.log(`La racine carrée de ${num3} est :`, calculateSquareRoot(num3)); // Output: La racine carrée de 16 est : 4

module.exports = app;
