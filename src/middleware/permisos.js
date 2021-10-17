const permisos = () => {
    const peticiones = ["POST", 'PUT', 'DELETE', 'GET']
    const roles = [1, 2, 3];
    const convertir = (prop) => peticiones.map(x => ({ entidad: prop, method: x }))
    const permisos = [...convertir("usuario"), ...convertir("comercio")];
    const res = [];
    roles.forEach(r => {
        permisos.forEach(p => {
            switch (r) {
                case 3:
                    if (p.entidad !== "usuario" && p.method !== "DELETE") res.push({ role: r, ...p });
                    break;
                case 2:
                    if (p.entidad === "usuario" && p.method !== "DELETE" && p.method !== "POST") res.push({ role: r, ...p });
                    else res.push({ role: r, ...p });
                    break;
                default:
                    res.push({ role: r, ...p });
            }
        })
    });
    return res;
}
export const validacionRole = (role, tag, method) => {
    return permisos().find(x => (x.role === role && x.entidad === tag && x.method === method));
}