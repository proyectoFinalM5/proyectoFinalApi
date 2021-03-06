import Express from 'express'
import Morgan from 'morgan'
import routerComercio from './routes/comercio.routes.js'
import routerUsuario from './routes/usuario.routes.js'
import expressJSDocSwagger from 'express-jsdoc-swagger'
import routerAuth from './routes/auth.routes.js'

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { middleware } from './middleware/index.js'
import cors from 'cors'

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = Express()

const options = {
  info: {
    version: '1.0.0',
    title: 'Comercio API',
    license: {
      name: 'CRUD Comercio/Usuario',
    },
  },
  security: {
    BearerAuth: {
      type: 'http',
      scheme: 'bearer',
    },
  },
  baseDir: __dirname,
  filesPattern: './routes/*.js',
  swaggerUIPath: '/api-docs',
  exposeSwaggerUI: true,
  exposeApiDocs: false,
  apiDocsPath: '/v3/api-docs',
  notRequiredAsNullable: false,
  swaggerUiOptions: {},
  multiple: true,
};

expressJSDocSwagger(app)(options);
app.use(Express.json());
app.use(cors());
app.use(Express.urlencoded({ extended: true }));
app.use(Morgan('dev'))
app.use('/comercio', middleware, routerComercio)
app.use('/usuario', middleware, routerUsuario)
app.use(routerAuth)
app.set('puerto', process.env.PORT || 3000)

export default app;