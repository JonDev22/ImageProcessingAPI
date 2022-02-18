"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("./middleware/logger"));
var imageRoute_1 = __importDefault(require("./utilities/routes/imageRoute"));
var app = (0, express_1.default)();
var port = 3000;
app.get('/', logger_1.default, function (req, res) {
    res.send('Image processing API!');
});
app.use('/images', imageRoute_1.default);
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
exports.default = app;
