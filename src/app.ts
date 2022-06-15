import express from "express";
import apiRoutes from './routes/api'
import { validateApiKey } from "./middleware/middleware";
const app = express();
app.use(validateApiKey)
app.use(express.json())
app.use('/api/mensajes', apiRoutes)

export default app;