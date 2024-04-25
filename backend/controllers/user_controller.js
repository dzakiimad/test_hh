const bcrypt = require('bcrypt')

const {Sequelize} = require('sequelize');
const { generateToken } = require('../helpers_function/jwt');
const sequelize = new Sequelize('test_hh_dev', 'postgres', 'postgres', {
    host: 'localhost',
    dialect:'postgres' 
  })
class User_controller {
    static async updateUser(req, res) {
        try {
            const { name, rate_perjam } = req.body
            const { id } = req.user

            const objectData = {}
            if(name) objectData.name = name
            if(rate_perjam) objectData.rate_perjam = rate_perjam

            if(Object.keys(objectData).length) {
                await sequelize.query(`UPDATE "Users"
                SET
                    ${Object.keys(objectData).map(key => `"${key}" = :${key}`).join(', ')}
                WHERE "id" = :id`, {replacements: { id, name, rate_perjam }})
            }

            res
                .status(200)
                .json({
                    "message": `update success` 
                });

        } catch (error) {
            res
                .status(error?.status || 500)
                .json({ error: error?.message || "Internal server error" })
        }
    }
    static async login(req, res) {
        try {
            const { email, password } = req.body
            
            let user
            if (email) {
               user = await sequelize.query(`SELECT * FROM "Users" WHERE "email" = :email`, { replacements: { email } })
               user = user[0][0]
            }

            if (!user) {
                throw {
                    name: 'Unauthorized',
                    message: 'Email wrong',
                    status: 401
                }
            }
            const verifyPassword = await bcrypt.compare(password, user.password)
            if (!verifyPassword) {
                throw {
                    name: 'Unauthorized',
                    message: 'Password wrong',
                    status: 401
                }
                
            }
            const accessToken = generateToken({id: user.id, email: user.email})
            res
                .status(200)
                .json({accessToken})
        } catch (error) {
            res
                .status(error?.status || 500)
                .json({ error: error?.message || "Internal server error" })
        }
    }
}

module.exports = User_controller
