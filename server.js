const express = require('express')
const app = express()
const port = 3000

app.get('/getJsonObject', (req, res) => {
    res.send(`{
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      }`)
})

app.get('/getJsonArray', (req, res) => {
    res.send(`[
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        }
    ]`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})