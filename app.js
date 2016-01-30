var express        = require('express')
, bodyParser     = require('body-parser')
, errorHandler   = require('errorhandler')
, methodOverride = require('method-override')
, morgan         = require('morgan')
, http           = require('http')
, path           = require('path')
, swig          = require('swig')
, routes        = require('./routes/index')

var app = express();;

app.engine('html', swig.renderFile);
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/', routes);

// development only
if ('development' === app.get('env')) {
    app.use(errorHandler())
}
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'))
})
