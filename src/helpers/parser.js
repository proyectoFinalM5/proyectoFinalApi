export const parseTelefono = (numero) => {
    return `+503 ${numero.substr(0, 4)}-${numero.substr(3, 4)}`
}