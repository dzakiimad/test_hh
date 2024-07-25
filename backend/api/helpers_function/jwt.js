var jwt = require('jsonwebtoken');

function generateToken(payload) {return jwt.sign(payload, process.env.JWT_SECRET ?? 'rahasia')}
function verifyToken(token) {return jwt.verify(token, process.env.JWT_SECRET ?? 'rahasia')}

module.exports = {generateToken, verifyToken}