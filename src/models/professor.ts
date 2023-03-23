import mongoose from "mongoose"


interface IProf {
    name:String;
    cabinet:String;
}

interface ProfessorModelInterface extends mongoose.Model<ProfDoc>{
    build(attr:IProf): ProfDoc
}

interface ProfDoc extends mongoose.Document{
    name:String;
    cabinet:String;
}

const profSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    cabinet:{
        type:String,
        required:true
    }
})

profSchema.statics.build = (attr: IProf) => {
    return new Professor(attr);
}
const Professor = mongoose.model<ProfDoc,ProfessorModelInterface>("Professor", profSchema);


export {Professor}