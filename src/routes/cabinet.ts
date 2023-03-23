import express, { Request, Response } from "express";
import { Cabinet } from "../models/cabinet";

const router = express.Router();


router.get("/api/cabinets",[],async(req:Request,res:Response)=> {
    const cabinets = await Cabinet.find({})
    return res.status(200).send(cabinets);
})

router.post("/api/cabinets",async(req:Request,res:Response) => {
    const {title,description,people} = req.body;
    const cabinet = Cabinet.build({title,description,people})
    await cabinet.save()
    return res.status(201).send(cabinet)
})

export {router as cabinetRouter};