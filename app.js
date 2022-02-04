const axios = require('axios');
const fs = require('fs')

const start = `<!DOCTYPE html>
<html lang="en"> 
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Looping through</h1>
    <div id="cardz">

`
;
const end =`

</div>
</body>
</html>
`;

fs.writeFileSync("index.html", start);



 axios.get('https://randomuser.me/api/?results=5')
    .then(res => {
        
        let people = res.data.results
        let content = '';
        people.map(person => {
           content = `

<div class="card">
            
<img src="${person.picture.thumbnail}" alt="Avatar" style="width:100px; height:100px">
<div class="container">
  <h4><b>${person.name.title} ${person.name.first} ${person.name.last}</b></h4>
  <p>${person.location.city}, ${person.location.state}, ${person.location.country}</p>
</div>
</div> 
 `
 fs.appendFileSync('index.html', content)
        })
       
        fs.appendFileSync('index.html',end)
    })
    .catch(err => {
        console.log(err)

    })
