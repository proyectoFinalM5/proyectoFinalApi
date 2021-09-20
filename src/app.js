import Express from 'express'
import Morgan from 'morgan'
import RutasComercio from './routes/comercio.routes.js'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Comercios API",
        version: '1.0.0',
      },
    },
    apis: ["./routes/comercio.routes.js","./routes/usuario.routes.js"],
};
  

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const app = Express();
app.use('/Comercios-doc', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Morgan('dev'))
app.use('/comercio', RutasComercio)
app.set('puerto', 3000)

export default app;