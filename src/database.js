import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.URL_DATABASE)
        .then((db) => console.log("Ya en linea XD"))
        .catch((err) => console.log("No se conecta :( "));
}