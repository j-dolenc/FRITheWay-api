import express, { Request, Response } from "express";
import { mainRouter } from "./routes/routes";
import { cabinetRouter } from "./routes/cabinet";

const app = express();
require('./db/db')
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(mainRouter);
app.use(cabinetRouter);



app.listen(process.env.PORT || 8080, () => {
    console.log("Server is running at 8080.");
})