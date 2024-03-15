"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./utils/data");
const user_1 = require("./router/user");
const food_1 = require("./router/food");
const category_1 = require("./router/category");
const order_1 = require("./router/order");
(0, data_1.connectDataBase)();
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/users', user_1.user);
app.use('/foods', food_1.food);
app.use('/category', category_1.category);
app.use('/', order_1.order);
const PORT = process.env.PORT || 8000;
app.get('/', (req, res) => {
    res.status(200).send({ succes: true, msg: "hello" });
});
app.listen(PORT, () => {
    console.log(`SERVER ON , ${PORT}`);
});
