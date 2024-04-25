const { verifyToken } = require ("../helpers_function/jwt")
const jwt = require("jsonwebtoken")

module.exports = function authentication(req, res, next) {
    try {
        let token = req.headers.authorization
        if (!token) {
            throw { name: 'InvalidToken' }
        }
        if (token.slice(0, 7) !== 'Bearer ') {
            throw { name: 'InvalidToken' }
        }
        token = token.slice(7)
        let payload = verifyToken(token)
        if (!payload) {
            throw { name: 'InvalidToken' }
        }
        req.user = {
            id: payload.id,
            email: payload.email
        }
        next()
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError || error instanceof SyntaxError) {
            return res
            .status(401)
            .json({"message":"invalid token"})
          }
        next(error)
    }
}
