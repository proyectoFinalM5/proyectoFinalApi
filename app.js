const  Express  =require("express");
const Morgan =require("morgan");

const RutasComercio =require("./routes/comercio.routes.js")


const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({extended:true}));
app.use(Morgan('dev'))
app.use(RutasComercio)
app.set('puerto', 3000)


//GET con  
app.get("/",(req,res)=>{
    res.send("hola");
})


module.exports= app