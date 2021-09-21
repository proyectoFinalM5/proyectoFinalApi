import mongoose from "mongoose"

export const parseTelefono = (numero) => {
    return `+503 ${numero.substr(0, 4)}-${numero.substr(3, 4)}`
}
export const stringToObjectID = (id) => {
    return mongoose.Types.ObjectId(id);
}