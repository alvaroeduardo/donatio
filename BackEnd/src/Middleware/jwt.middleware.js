import jwt from 'jsonwebtoken';
import dotenv from "dotenv/config";

const SECRET = process.env.SECRET_KEY;

export default function verifyJwt(req, res, next){
    const token = req.headers['token'];

    jwt.verify(token, SECRET, (err, decoded) => {
        if(err) return res.status(401).json({auth: false});

        req.userId = decoded.userId;
        next();
    })
}