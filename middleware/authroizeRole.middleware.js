export const authorizeRole = (...allowedRoles) => {
    return (req, res, next) => {
        const role = req.user?.role.toLowerCase();

        if (!role || !allowedRoles.includes(role)) {
            return res.status(403).json({ error: 'Akses Ditolak: Role tidak diizinkan' });
        }

        next()
    }
}