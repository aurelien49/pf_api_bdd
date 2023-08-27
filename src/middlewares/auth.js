const jwt = require('jsonwebtoken');
const User_in_db = require('../models/user_model');
const l = require('../log/main_logger');

module.exports = (req, res, next) => {
    try {
        const email = req.headers.email;
        const token = req.headers.authorization;
        let decodeToken = "";

        try {
            decodeToken = jwt.verify(token, process.env.BRCYPTE_SECRET_TOKEN_KEY);
        } catch {
            l.e(`Auth: echec décodage du token`);
        }

        User_in_db.findById(decodeToken.userId)
            .then((user) => {
                if (email === user.email) {
                    l.i(`Succès: user enregistré avec l'email : ${email}`);
                    next();
                } else {
                    l.e(`Echec: UNAUTHORIZED 1 : un user a voulu s'enregistrer avec l'email : ${email}`);
                    res.status(403).json({message: 'UNAUTHORIZED 1'});
                }
            })
            .catch(() => {
                l.e(`Echec: UNAUTHORIZED 2`);
                res.status(403).json({message: 'UNAUTHORIZED 2'})
            })

    } catch {
        l.e(`Echec: UNAUTHORIZED 3`);
        res.status(403).json({message: 'UNAUTHORIZED 3'})
    }
};