const express = require('express')
const router = express.Router()

router.get('/timestamp/:date?', (req, res, next) => {
    let dateToConvert = req.params.date
    let date
    if (!dateToConvert) {
        date = new Date()
        res.json({
            unix: date.valueOf(),
            utc: date.toUTCString()
        })
    }
    else {
        if (!isNaN(dateToConvert)) {
            date = new Date(parseInt(dateToConvert))
        } else {
            date = new Date(dateToConvert)
        }
        if (date.toString() === 'Invalid Date') {
            res.json({ error: date.toString() })
        }
        else {
            res.json({
                unix: date.valueOf(),
                utc: date.toUTCString()
            })
        }
    }
})
module.exports = router;