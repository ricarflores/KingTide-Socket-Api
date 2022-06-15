"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect('mongodb://localhost:27017/develop');
const connection = mongoose_1.default.connection;
connection.on('open', () => {
    console.log("mongodb connected");
});
connection.on("error", err => {
    console.log(err);
    process.exit(0);
});
