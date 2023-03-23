import mongoose from "mongoose";
import { Professor } from "./professor";

interface ICabinet {
  title: String;
  description: String;
  people: Array<typeof Professor>;
}

interface CabinetModelInterface extends mongoose.Model<CabinetDoc>{
    build(attr:ICabinet): CabinetDoc
}

interface CabinetDoc extends mongoose.Document{
    title:String;
    description:String;
    people:Array<typeof Professor>;
}

const cabinetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  people: {
    type: Array<typeof Professor>,
    required: true,
    default: [],
  },
});

cabinetSchema.statics.build = (attr: ICabinet) => {
    return new Cabinet(attr)
}

const Cabinet = mongoose.model<CabinetDoc,CabinetModelInterface>("Cabinet", cabinetSchema);

// const build = (attr: ICabinet) => {
//   return new Cabinet(attr);
// };

export { Cabinet };
