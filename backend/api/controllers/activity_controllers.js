// const { Sequelize } = require('sequelize');
const { sequelize } = require('../models');
const { timeToSeconds, secondsToTime } = require('../helpers_function/totalActivity');

class Activity_controller {
    static async addActivity(req, res) {
        try {
            const { judul, project_id, tanggal_mulai, tanggal_berakhir, jam_mulai, jam_berakhir } = req.body
            const user_id = req.user.id
            let activity
            if (judul, user_id, project_id, tanggal_mulai, tanggal_berakhir, jam_mulai, jam_berakhir) {
                activity = await sequelize.query(`INSERT into "Activities"
                ("judul","user_id","project_id","tanggal_mulai","tanggal_berakhir","jam_mulai","jam_berakhir","createdAt","updatedAt") 
                values
                (:judul,:user_id,:project_id,:tanggal_mulai,:tanggal_berakhir,:jam_mulai,:jam_berakhir, now(), now())`
                    , { replacements: { judul, user_id, project_id, tanggal_mulai, tanggal_berakhir, jam_mulai, jam_berakhir } })
            }

            res
                .status(200)
                .json(activity)
        } catch (error) {
            res
                .status(error?.status || 500)
                .json({ error: error?.message || "Internal server error" })
        }
    }

    static async getActivity(req, res) {
        try {
            const user_id = req.user.id
            const { filterProject } = req.query
            let filterWhere = 'WHERE "user_id" = :user_id'

            if (filterProject) {
                filterWhere += ` AND project_id IN (${filterProject.join(', ')})`
            }
            const user = (await sequelize.query(`
            SELECT 
            u.id, u.name, u.rate_perjam
            FROM "Users" u
            WHERE "id" = :user_id`
                , { replacements: { user_id } }))[0][0]

            const activity = await sequelize.query(`
            SELECT 
            a.id, a.judul, p.name as project, a.tanggal_mulai, a.tanggal_berakhir, a.jam_mulai, a.jam_berakhir
            FROM "Activities" a
            LEFT JOIN "Projects" p ON "a"."project_id" = "p"."id"
            ${filterWhere}`
                , { replacements: { user_id } })

            let totalDuration = 0

            let activities = activity[0]?.map(item => {
                const { jam_mulai, jam_berakhir, tanggal_mulai, tanggal_berakhir } = item
                const jam = (new Date(tanggal_berakhir) - new Date(tanggal_mulai)) / 1000
                const durasi = timeToSeconds(jam_berakhir) - timeToSeconds(jam_mulai) + jam
                totalDuration += durasi
                return {
                    id: item.id,
                    judul: item.judul,
                    project: item.project,
                    tanggal_mulai: item.tanggal_mulai,
                    tanggal_berakhir: item.tanggal_berakhir,
                    jam_mulai: item.jam_mulai,
                    jam_berakhir: item.jam_berakhir,
                    durasi: durasi
                }
            })

            let totalGain = totalDuration / 3600 * user?.rate_perjam

            res
                .status(200)
                .json({
                    user: {
                        name: user?.name,
                        rate_perjam: user?.rate_perjam,
                        totalDuration: totalDuration || 0,
                        totalGain: totalGain || 0
                    },
                    activities
                })

        } catch (error) {
            // console.log(error);
            res
                .status(error?.status || 500)
                .json({ error: error?.message || "Internal server error" })
        }
    }

    static async deleteActivity(req, res) {
        try {
            const user_id = req.user.id
            const { id } = req.body
            let activity
            activity = await sequelize.query(`
                DELETE FROM "Activities"
                WHERE "id" = :id AND "user_id" = :user_id`
                , { replacements: { id, user_id } })

            res
                .status(200)
                .json({
                    "message": "success delete activity"
                })
        } catch (error) {
            res
                .status(error?.status || 500)
                .json({ error: error?.message || "Internal server error" })
        }
    }

    static async getActivityById(req, res) {
        try {
            const user_id = req.user.id
            const id = req.params.id
            const activity = await sequelize.query(`
            SELECT 
            a.id, a.judul, p.name as project, a.tanggal_mulai, a.tanggal_berakhir, a.jam_mulai, a.jam_berakhir
            FROM "Activities" a
            LEFT JOIN "Projects" p ON "a"."project_id" = "p"."id"
            WHERE a.id = :id AND a.user_id = :user_id`
                , { replacements: { id, user_id } })
            res
                .status(200)
                .json(activity[0])
        } catch (error) {
            res
                .status(error?.status || 500)
                .json({ error: error?.message || "Internal server error" })
        }
    }

    static async updateActivity(req, res) {
        try {
            const { id, judul, project_id, tanggal_mulai, tanggal_berakhir, jam_mulai, jam_berakhir } = req.body
            const user_id = req.user.id

            const objectData = {}
            if (judul) objectData.judul = judul
            if (project_id) objectData.project_id = project_id
            if (tanggal_mulai) objectData.tanggal_mulai = tanggal_mulai
            if (tanggal_berakhir) objectData.tanggal_berakhir = tanggal_berakhir
            if (jam_mulai) objectData.jam_mulai = jam_mulai
            if (jam_berakhir) objectData.jam_berakhir = jam_berakhir

            if (Object.keys(objectData).length) {
                await sequelize.query(`UPDATE "Activities"
                SET
                    ${Object.keys(objectData).map(key => `"${key}" = :${key}`).join(', ')}
                WHERE "user_id" = :user_id AND "id" = :id`, { replacements: { id, judul, project_id, tanggal_mulai, tanggal_berakhir, jam_mulai, jam_berakhir, user_id } })
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
}



module.exports = Activity_controller

