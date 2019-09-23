"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var DIR_BUILD = path_1.resolve('../build');
var app = express_1.default();
app.use(morgan_1.default('common'));
app.use(express_1.default.static(DIR_BUILD));
// serve index.html for any unknown paths
app.get('/*', function (_req, res) {
    res.sendFile(path_1.join(DIR_BUILD, 'index.html'));
});
app.listen(Number(process.env.PORT) || 4000);
//# sourceMappingURL=index.js.map