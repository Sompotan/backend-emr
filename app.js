import express from 'express';
import cors from 'cors';

import {PORT} from "./config/env.js";
import authRoutes from "./routes/auth.routes.js";
import pasienRoutes from "./routes/pasien.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import dokterRoutes from "./routes/dokter.routes.js";
import universalRoutes from "./routes/universal.routes.js";
import {corsOptions} from "./middleware/corsOption.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser())


app.use('/api/v1', universalRoutes)

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/pasien', pasienRoutes)
app.use('/api/v1/admin', adminRoutes)
app.use('/api/v1/dokter', dokterRoutes)

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})

export default app;