import dotenv from 'dotenv';
import app from './app.js'
import connectDatabase from './db/index.js';

dotenv.config();
const port = process.env.PORT
connectDatabase().then(() => {
        app.listen(port, () => {console.log(`http://localhost:${port}/api/v1`)})
}).catch((err) => {
        logger.error("Db Connection Error " + err);
        process.exit(1);
})


