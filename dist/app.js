"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _http = _interopRequireDefault(require("http"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// initiliase the express app
var app = (0, _express.default)();
app.use((0, _morgan.default)('dev'));
app.use((0, _cors.default)()); // parse incoming http requests

app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
var port = process.env.PORT || 9000;
app.set('port', port); // create the server

var server = _http.default.createServer(app);

server.listen(port, function () {
  return console.log("App is running on localhost:".concat(port));
});
app.get('/', function (req, res) {
  return res.status(200).json({
    status: 'success',
    message: 'Space launched'
  });
});
var _default = app;
exports.default = _default;