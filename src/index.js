import App from './app.js';
import { connectDB } from './database.js'

connectDB();
App.listen(App.get('puerto'), () => console.log("Servidor en línea " + App.get('puerto')));