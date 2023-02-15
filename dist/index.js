"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.route('/').get((req, res) => {
    res.send('Hello there !');
});
app.listen(config_1.config.PORT, () => console.log(`⚡️Server runnning http://localhost:${config_1.config.PORT}`));
