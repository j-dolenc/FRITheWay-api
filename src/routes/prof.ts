import express, { Request, Response } from "express";
import { Professor } from "../models/professor";

const router = express.Router();

router.post("/api/profs",(req:Request,res:Response) => {

})


router.get("/api/profs",[],async(req:Request,res:Response) => {
    const allProfs = await Professor.find({})
    return res.status(200).send(allProfs)
})


router.post("/api/prof",async(req:Request,res:Response) => {
    const {name,cabinet} = req.body;
    const prof = Professor.build({name,cabinet})
    await prof.save()
    return res.status(201).send(prof)
})


router.get("/api/prof",(req:Request,res:Response)=>{

})

export {router as profRouter};