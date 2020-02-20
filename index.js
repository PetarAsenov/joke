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

app.get('/',(request,response) => {
  response.send(page)
})

app.listen(3000, () => {
  console.log('loading...')
})