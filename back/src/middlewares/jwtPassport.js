const fs = require('fs');
const path = require('path');
const Trainer = require('../models/Trainer');
const pathToKey = path.join(__dirname, '../../', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256']
}


module.exports = (passport) => {
    passport.use(new JwtStrategy(options, async (payload, done) => {
        await Trainer.findByPk(payload.sub).then((Trainer) => {
            if (Trainer) {
                return done(null, Trainer);
            } else {
                return done(null, false);
            }
        }).catch(err => done(err, null));
    }))
};
