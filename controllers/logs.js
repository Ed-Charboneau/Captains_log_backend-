const CaptainsLog = require('../models').captainslog;

const getAll = (req, res) => {
    CaptainsLog.findAll()
    .then(logs => {
        res.status(200).json(logs)
    })
}

module.exports = {
    getAll
}
