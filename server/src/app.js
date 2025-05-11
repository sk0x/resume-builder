import express from 'express';
import cors from 'cors';
import serverRoutes from './routes/index.js';
import {rateLimit} from 'express-rate-limit';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json({ limit: "15kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    credentials: true,
    origin: "*",
}));
app.use(cookieParser());
// rating limiting config // 100 req / min;
const rateLimiting = rateLimit({
    windowMs: 1 * 60 * 1000,
    limit: 100,
    standardHeaders: true,
    legacyHeaders: false,
})

// routes
app.use("/api/v1", serverRoutes);

export default app;


