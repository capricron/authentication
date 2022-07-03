// ambil data dari model
require('dotenv').config();
const {User} = require('../models');
const bycrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const { Op } = require("sequelize");


exports.RegisterUser = async (req,res) => {
    const {email,username,password} = req.body;

    const user = await User.findOne({
        where: {
            [Op.or]: [{email}, {username}]
        }
    });

    if(user){
        return res.status(400).json({
            status: false,
            message: 'Username atau Email sudah terdaftar'
        });
    }

    const data = {
        email,
        username,
        password: bycrypt.hashSync(password,10)
    }

    const userData = await User.create(data);

    return res.status(200).json({
        message : "user berhasil ditambahkan",
    });
}

exports.LoginUser = async (req,res) => {
    const {username,password} = req.body;

    const user = await User.findOne({
        where: {
            [Op.or]: [{email: username},{username: username}]
        },
    });

    if(user){
        if(bycrypt.compareSync(password,user.password)){

            const token = jsonwebtoken.sign({
                id: user.id,
                username: user.username,
                email: user.email,
            },process.env.JWT_SECRET,{expiresIn: '1d'});

            return res.status(200).json({
                message : "user berhasil login",
                token,
            });
        
        }else{
            return res.status(400).json({
                status: false,
                message : "user atau password salah",
            });
        }
    }else{
        return res.status(400).json({
            message : "user atau password salah",
        });
    }
}

exports.getSingleUser = async (req,res) => {
    const user = await User.findOne({
        where: {
            id: req.id
        }
    });

    return res.status(200).json({
        message: "user ditemukan",
        user,
    });
}