const {check, validationResult} = require('express-validator');

exports.validation = (req, res, next) => {
    console.log(next)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({
            status: false,
            message: errors.array()[0].msg,
        });
    }
    next();
}

// validati input kosong
exports.validationDaftar = [
    check('username', 'Username tidak boleh kosong').notEmpty(),
    check('email', 'Email tidak boleh kosong').notEmpty().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).withMessage('Email tidak valid'),
    check('password', 'Password tidak boleh kosong').notEmpty().isLength({min: 6}).withMessage('Password minimal 6 karakter'),
]


// validasi login
exports.validationLogin = [
    check('username', 'Username tidak boleh kosong').notEmpty(),
    check('password', 'Password tidak boleh kosong').notEmpty().isLength({min: 6}).withMessage('Password minimal 6 karakter'),
]