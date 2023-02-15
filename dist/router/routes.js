"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
// import prismaClient from "../prisma";
const userRoute = (app) => {
    app.route('/').get((req, res) => {
        res.send('Hello there !');
    });
};
exports.userRoute = userRoute;
