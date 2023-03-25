import express, { Request, Response } from "express";
import { Professor } from "../models/professor";

const router = express.Router();

//post multiple professors
router.post("/api/profs",async(req:Request,res:Response) => {
    const profs = req.body;
    //console.log(cabinets);
    for(var prof of profs){
        const{name, room} = prof;
        const professor = Professor.build({name,room});
        await prof.save();
    }
    return res.status(201).send(profs);
})


router.get("/api/profs",[],async(req:Request,res:Response) => {
    const allProfs = await Professor.find({})
    return res.status(200).send(allProfs)
})


router.post("/api/prof",async(req:Request,res:Response) => {
    const {name,room} = req.body;
    const prof = Professor.build({name,room})
    await prof.save()
    return res.status(201).send(prof)
})


router.get("/api/prof",async(req:Request,res:Response)=>{
    const {name} = req.body;
    const prof = await Professor.find({name});
    return res.status(200).send(prof);
})

export {router as profRouter};