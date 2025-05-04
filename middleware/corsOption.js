const allowedOrigins = [
    'http://192.168.236.96:3000',
    'http://localhost:3000',
    'exp://192.168.1.5:8081',
]

export const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not Allowed By CORS"));
        }
    },
    credentials: true,
}