"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var serve_static_1 = __importDefault(require("serve-static"));
var body_parser_1 = __importDefault(require("body-parser"));
var content_disposition_1 = __importDefault(require("content-disposition"));
var cors_1 = __importDefault(require("cors"));
var path_1 = require("path");
var bluebird_1 = require("bluebird");
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
var longHandler = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var duration;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                duration = Number(req.body.duration || req.query.duration) || 3000;
                return [4 /*yield*/, bluebird_1.delay(duration)];
            case 1:
                _a.sent();
                res.status(200).send({ message: 'OK' });
                return [2 /*return*/];
        }
    });
}); };
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
app
    .route('/long')
    .get(longHandler)
    .post(longHandler);
var server = app.listen(1333, function () {
    // eslint-disable-next-line no-console
    return console.log("Server started on port " + server.address().port);
});
//# sourceMappingURL=index.js.map