const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('*', express.static("./dist"))

app.listen(port, () => {
    `Server has been started on port ${port}`
})
