const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET_KEY;

function verifyJWT(req, res, next){
    const token = req.headers['x-access-token'];

    jwt.verify(token, SECRET, (err, decoded)=>{
        if(err) return res.status(401).json({auth: false});

        req.userId = decoded.userId;
        next();
    });
}

module.exports = verifyJWT;