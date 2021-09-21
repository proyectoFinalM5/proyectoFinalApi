import App from './app.js';
import { connectDB } from './database.js'
import dotenv from 'dotenv'

dotenv.config()
// connectDB();
App.listen(App.get('puerto'), () => console.log("Servidor en línea " + App.get('puerto')));