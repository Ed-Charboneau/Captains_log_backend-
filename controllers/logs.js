const CaptainsLog = require('../models').CaptainsLog;

const getAll = (req, res) => {
    CaptainsLog.findAll()
    .then(logs => {
        res.status(200).json(logs)
    })
}

module.exports = {
    getAll,

}