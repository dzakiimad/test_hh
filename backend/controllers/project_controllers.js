const { Sequelize } = require('sequelize');
const { sequelize } = require('../config/config');
class Project_controller {
    static async addProject(req, res) {
        try {
            const { name } = req.body
            console.log(name)
            let project
            if (name) {
                project = await sequelize.query(`INSERT into "Projects"
                ("name","createdAt","updatedAt") 
                values
                (:name, now(), now())`
                    , { replacements: { name } })
            }
            if (project[1]) {
                res
                    .status(200)
                    .json({
                        message: "success add project"
                    })
            }
        } catch (error) {
            res
                .status(error?.status || 500)
                .json({ error: error?.message || "Internal server error" })
        }
    }
    static async getProject(req, res) {
        try {
            let project = await sequelize.query(`SELECT * FROM "Projects"`)
            res
                .status(200)
                .json({
                    data: project[0]
                })
        } catch (error) {
            res
                .status(error?.status || 500)
                .json({ error: error?.message || "Internal server error" })
        }
    }

}

module.exports = Project_controller

