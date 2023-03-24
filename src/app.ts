import express, { Request, Response } from "express";
import { mainRouter } from "./routes/routes";
import { cabinetRouter } from "./routes/cabinet";
import { profRouter } from "./routes/prof";
const app = express();
require('./db/db')
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(mainRouter);
app.use(cabinetRouter);
app.use(profRouter);



app.listen(process.env.PORT || 8080, () => {
    console.log("Server is running at 8080.");
})