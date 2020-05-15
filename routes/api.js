const express = require('express')
const router = express.Router()

router.get('/timestamp/:date', (req, res, next) => {

    date = new Date((req.params.date))
    isNaN(date) ? date = new Date(parseInt(req.params.date)) : null

    if (isNaN(date))
        res.json({ error: date.toString() })
    else {
        res.json({
            unix: date.getTime(),
            utc: date.toUTCString()
        })
    }
})

module.exports = router;