const crypto = require("crypto");
const fs = require("fs");
const path = require('path');
const jsonwebtoken = require('jsonwebtoken');



const PRIV_KEY = fs.readFileSync(path.join(__dirname, "..", "..", "id_rsa_priv.pem"), "utf-8");


function generatePassword(password) {
    const salt = crypto.randomBytes(32).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return {
        salt: salt,
        hash: hash
    };
}


function checkPassword(password, hash, salt) {
    const hashFromReq = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hashFromReq === hash;
}

function generateJWT(trainer) {
    const sub = trainer.id;
    const payload = {
        sub: sub,
        iat: Date.now()
    };
    const jwt = jsonwebtoken.sign(payload, PRIV_KEY, { expiresIn: "7d", algorithm: 'RS256' });
    return jwt;
}

function decodeJwt(token) {
    const payload = token.split(".")[1];
    const encodedPayload = Buffer.from(payload, 'base64');
    const decodedPayload = encodedPayload.toString('utf-8');
    return JSON.parse(decodedPayload);
}

function getToken(req) {
    const header = req.get('Authorization');
    if (!header) return error;
    return header.split(' ')[1];
}

module.exports = {
    checkPassword,
    generatePassword,
    generateJWT,
    decodeJwt,
    getToken
}
