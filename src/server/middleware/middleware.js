require('dotenv').config();
const jsonwebtoken = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    const token = req.header('Authorization')

    if (!token) {
        return res.status(401).json({
            status: false,
            message: 'No token provided'
        })
    }

    try {
        const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET)
        req.id = decoded.id
        next();
    }
    catch (err) {
        return res.status(401).json({
            status: false,
            message: 'Invalid token'
        })
    }
} 