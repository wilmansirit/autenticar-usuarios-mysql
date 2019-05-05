const createError   = require('http-errors')
  ,   express       = require('express')
  ,   path          = require('path')
  ,   cookieParser  = require('cookie-parser')
  ,   logger        = require('morgan')
  ,   session       = require('express-session')
  ,   MySQLStore    = require('express-mysql-session')(session)
  ,   homeRoutes    = require('./routes/home')
  ,   authRoutes    = require('./routes/auth')
  ,   flash         = require('connect-flash')
  ,   passport      = require('passport')
  ,   helmet        = require('helmet')
  ,   models        = require('./models')

  
require('dotenv').config();
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware

app.use(helmet());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour

app.use(session({
  secret            : process.env.SESSION_HASH,
  name              : 'sessionId',
  resave            : true,
  saveUninitialized : true,
  store             : new MySQLStore({
    host            : process.env.DB_HOSTNAME,
    port            : process.env.LOCAL_PORT,
    user            : process.env.LOCAL_USERNAME,
    password        : process.env.LOCAL_PASSWORD,
    database        : process.env.LOCAL_DATABASE
  }),
  cookie            : {
    expires         : expiryDate
  }
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Flash Messages
app.use(flash());

// Routes
app.use('/', homeRoutes);
app.use('/auth', authRoutes);

// Load Passport Strategies
require('./passport/passport')(passport, models.User);

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


module.exports = app;
