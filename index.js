const express = require('express')
const app = express()
const page = `<html>
  <head>
    <title>Petar Asenov</title>
  </head>
  <body>
    <h1>Why do comedians love !false?</h1>
    <p>It's funny because it's true.</p>
  </body>

</html>`

app.get('/',(request,response) => {
  response.send(page)
})

app.listen(3000, () => {
  console.log('loading...')
})