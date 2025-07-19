const allowedOrigins = [
    'http://192.168.182.96:3000',
    'http://localhost:3000',
    'exp://10.162.26.96:8081',
    'http://localhost:8081',
    'http://10.0.2.2:8081'
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