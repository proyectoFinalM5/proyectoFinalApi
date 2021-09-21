import Express from 'express'
import Morgan from 'morgan'
import routerComercio from './routes/comercio.routes.js'
import routerUsuario from './routes/usuario.routes.js'
import expressJSDocSwagger from 'express-jsdoc-swagger'
import routerAuth from './routes/auth.routes.js'

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = Express()

const options = {
  info: {
    version: '1.0.0',
    title: 'Albums store',
    license: {
      name: 'MIT',
    },
  },
  security: {
    BasicAuth: {
      type: 'http',
      scheme: 'basic',
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
app.use(Express.urlencoded({ extended: true }));
app.use(Morgan('dev'))
app.use('/comercio', routerComercio)
app.use('/usuario', routerUsuario)
app.use(routerAuth)
app.set('puerto', process.env.PORT || 3000)

export default app;