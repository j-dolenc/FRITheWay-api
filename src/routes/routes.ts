import express, { Request, Response } from "express";
import { Cabinet } from "../models/cabinet";


const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.json({ message: "API is up" });
});

router.post("/", (req: Request, res: Response) => {

    const { name, email } = req.body;
    console.log(name);
    console.log(email);

    res.json({
        user: {
            name, email,
        },
    });
});

router.get("/about", (req: Request, res: Response) => {
    res.json({ message: "This is about" });
});


router.get("/profile", (req: Request, res: Response) => {
    res.json({ message: "This is your profile page" });
});

// router.post("/api/cabinets",async(req:Request,res:Response) => {
//     const {title,description,people} = req.body;
//     const cabinet = Cabinet.build({title,description,people})
//     await cabinet.save()
//     return res.status(201).send(cabinet)
// })


export { router as mainRouter};
