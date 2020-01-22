const {Subs} = require('../models');

module.exports = {
    async getAllSubs (req, res) {
        try {
            const allSubs = await Subs.findAll();
            res.send({
                Subs: allSubs
            })
        } catch (e) {
            console.log(e);
        }
    },
    async createSub (req, res) {
        try {
            const subData = await Subs.create(req.body);
            console.log(req.body);
            res.send(subData)
        } catch (err) {
            res.status(400).send({
            })
        }
    }
};