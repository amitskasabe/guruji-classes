import { connection } from "mongoose";

const {username , password } = process.env;
export const connectionStr = `mongodb+srv://amitskasabe:${password}@cluster0.nak5okh.mongodb.net/guruji?retryWrites=true&w=majority`

console.log(connectionStr);