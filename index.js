const express = require('express')
const app = express()
const jokes = {
  age: `<h1>A diplomat is a man who always remembers a woman's birthday but never remembers her age.</h1>
  `,
  tech: `<h1>How many programmers does it take to change a light bulb?</h1>
  <p>None. It's a hardware problem.</p>`,
  amsterdam: `<h1>What's the similarity between Amsterdam and the Tour de France?</h1>
  <p>Both have a lot of people on bicycles doing drugs.</p>`,
  netherlands: `<h1>A bull is standing at the border of the Netherlands and Belgium, in which country gives it his milk?</h1>
  <p>A bull doesn't give milk.</p>
  <p>Belgians don't know that!</p>`,
  bulgarians: `<h1>A Bulgarian goes to the doctor</h1>
  <p>-When was the last time you had an examination made by a doctor? -asked the doctor.</p>
  <p>-I don't know. Maybe 20 years ago.</p>
  <p>-Do you drink?</p>
  <p>-Yes. I drink beer for kidneys, and white wine for digestion. If I have low pressure I drink red wine and if I have high one I drink mastika. If I suffer from sore throath I drink rakija.</p>
  <p>-What about water? - asked the doctor, amazed.</p>
  <p>-Water... I haven't suffered from that yet.</p>
  `
}



function render(condition) {
  const {age, tech, amsterdam, netherlands, bulgarians} = jokes
  function findJoke() {
    switch (condition) {
      case 'age':
        return age;
        break;
      case 'tech':
        return tech;
        break;
      case 'amsterdam':
        return amsterdam;
        break;
      case 'netherlands':
        return netherlands;
        break;
      case 'bulgarians':
        return bulgarians;
        break;
    }
  }
  const joke = findJoke()
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
    ${joke}
    <p><a href="./tech">Tech Joke</a></p>
    <p><a href="./age">Age Joke</a></p>
    <p><a href="./amsterdam">Amsterdam Joke</a></p>
    <p><a href="./netherlands">Netherlands Joke</a></p>
    <p><a href="./bulgarians">Bulgarians Joke</a></p>
  </body>

</html>`
return page
}


const port = process.env.PORT || 3000

app.get('/home',(request,response) => {
  
  console.log('testing...')
  response.send(`<html>
    <head>
      <title>home</title>
    </head>
    <body>
      <p><a href="./tech">Tech Joke</a></p>
      <p><a href="./age">Age Joke</a></p>
      <p><a href="./amsterdam">Amsterdam Joke</a></p>
      <p><a href="./netherlands">Netherlands Joke</a></p>
      <p><a href="./bulgarians">Bulgarians Joke</a></p>
    </body>
  </html>`)
  
})

app.get('/:joke',(request,response) => {
  const page = render(request.params.joke)
  console.log('testing...')
  response.send(page)
  
})

app.listen(port, () => {
  // console.log(render('two'))
  console.log(`listening on port:${port}`)
})