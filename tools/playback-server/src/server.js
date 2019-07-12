const express = require('express')
const cors = require('cors')
const DB = require('./db')
const chalk = require('chalk')

const app = express()
app.use(cors({
    credentials: true
}))

app.get('*', function (req, res) {
    const url = `https://blockhub.gg${req.url}`

    const originalReq = DB.requests.findOne({ url })
    if (!originalReq) {
        console.log(chalk.underline.red(`[Request] > ${req.url}`))
        return res.end()
    }

    console.log(`[Request] > ${req.url}`)

    if (originalReq.data) {
        res.send(originalReq.data.body)
    } else {
        res.send(originalReq.data)
    }
})

const server = app.listen(9000, () => console.log(chalk.underline.green('Playback server is running on port 9000')))
