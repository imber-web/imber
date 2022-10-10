const express = require('express')
const childProcess = require('child_process')

const app = express()
app.get("*", (req, res) => {
    res.send(`
    <html> 
    <body>
    <div>hello-ssr</div>
    </body>
    </html>
    `)
})
app.listen(3000, () => {
    console.log("listen 3000")
})
childProcess.exec("start http://120.0.0.1:3000")