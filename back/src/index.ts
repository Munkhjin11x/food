import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import { connectDataBase } from "./utils/data";
import { user } from "./router/user";
import { food } from "./router/food";
import { category } from "./router/category";
import { order } from "./router/order";
dotenv.config()
const start = () => {
    connectDataBase()
    const app = express()
    app.use(express.json())
    app.use(cors())
     app.use('/users',user)
     app.use('/foods',food)
     app.use('/category',category)
     app.use('/',order)
    const PORT = process.env.PORT || 8000
    app.get('/', (req, res) => {
        res.status(200).send({ succes: true, msg: "hello" })
    })
    app.listen(PORT, () => {
        console.log(`SERVER ON , ${PORT}`);
    })
}
start()