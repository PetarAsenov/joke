const express = require('express')
const app = express()
const page = `<html>
  <head>
    <title>Petar Asenov</title>
    <style>
      body {
        background-color: blue;
        color: white;
      }
    </style>
  </head>
  <body>
    <h1>What's the similarity between Amsterdam and the Tour de France?</h1>
    <p>Both have a lot of people on bicycles doing drugs.</p>
  </body>

</html>`

const port = process.env.PORT || 3000

app.get('/',(request,response) => {
  response.send(page)
})

app.listen(port, () => {
  console.log(`listening on port:${port}`)
})