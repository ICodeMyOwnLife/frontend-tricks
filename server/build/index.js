"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var serve_static_1 = __importDefault(require("serve-static"));
var body_parser_1 = __importDefault(require("body-parser"));
var content_disposition_1 = __importDefault(require("content-disposition"));
var cors_1 = __importDefault(require("cors"));
var path_1 = require("path");
var DIR_STATIC = path_1.join(__dirname, '..', 'static');
var DIR_PUBLIC = path_1.join(__dirname, '..', 'public');
var HEADER_CONTENT_TYPE = 'Content-Type';
var HEADER_CONTENT_DISPOSITION = 'Content-Disposition';
var app = express_1.default();
var exportHandler = function (req, res) {
    var count = Number(req.body.count || req.query.count) || 10;
    var values = Array(count)
        .fill(0)
        .map(function (_, idx) { return ({ id: idx, value: Math.round(Math.random() * 10000) }); });
    res.setHeader(HEADER_CONTENT_TYPE, 'text/html');
    res.setHeader(HEADER_CONTENT_DISPOSITION, content_disposition_1.default(count + "_items.json", { type: 'attachment' }));
    res.status(200).send(values);
};
app.use(morgan_1.default('dev'));
app.use(cors_1.default({ exposedHeaders: [HEADER_CONTENT_DISPOSITION] }));
app.use(body_parser_1.default.json({}));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.text({}));
app.use(body_parser_1.default.raw({}));
app.use('/static', serve_static_1.default(DIR_STATIC, {
    setHeaders: function (res, path) {
        res.setHeader(HEADER_CONTENT_DISPOSITION, content_disposition_1.default(path, { type: 'attachment' }));
    },
}));
app.use('/public', serve_static_1.default(DIR_PUBLIC, {
    setHeaders: function (res, path) {
        res.setHeader(HEADER_CONTENT_DISPOSITION, content_disposition_1.default(path, { type: 'inline' }));
    },
}));
app
    .route('/export')
    .get(exportHandler)
    .post(exportHandler);
var server = app.listen(1333, function () {
    // eslint-disable-next-line no-console
    return console.log("Server started on port " + server.address().port);
});
//# sourceMappingURL=index.js.map