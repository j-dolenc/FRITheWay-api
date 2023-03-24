import express, { Request, Response } from "express";
import { Collection } from "mongoose";
import { Cabinet } from "../models/cabinet";

const router = express.Router();

//get all rooms
router.get("/api/cabinets",[],async(req:Request,res:Response)=> {
    const cabinets = await Cabinet.find({})
    return res.status(200).send(cabinets);
})

//post multiple rooms
router.post("/api/cabinets",async(req:Request,res:Response) => {
    const cabinets = req.body;
    console.log(cabinets);
    for(var cab of cabinets){
        const{room,title,category,description,people} = cab;
        const cabinet = Cabinet.build({room,title,category,description,people});
        await cabinet.save();
    }
    return res.status(201).send(cabinets);
})


//delete all rooms
router.delete("/api/cabinets",async(req:Request,res:Response)=>{
    await Cabinet.deleteMany({});
    return res.status(201).send("Succesfull deletion.")
})


//find one room by title
//TODO: make it search by title, room and description
//TODO: search similar words
router.get("/api/cabinet",async(req:Request,res:Response) => {
    const {title} = req.body;
    const cabinet = await Cabinet.find({title});
    return res.status(200).send(cabinet);
})

//post one room
router.post("/api/cabinet",async(req:Request,res:Response) => {
    const {room,title,category,description,people} = req.body;
    const cabinet = Cabinet.build({room,title,category,description,people})
    await cabinet.save()
    return res.status(201).send(cabinet)
})


//delete one room by roomname
router.delete("/api/cabinet",async(req:Request,res:Response)=>{
    const {room} = req.body;
    await Cabinet.deleteOne({room});
    return res.status(201).send("Succesfull deletion of document with title: " + room + ".");
})

export {router as cabinetRouter};