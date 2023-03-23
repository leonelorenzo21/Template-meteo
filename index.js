const express = require('express')
const app = express()


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/nome', function (req, res) {
  res.send('Ciao sono luca')
})

app.get('/mionome', function (req, res) {
    let nome
    nome=req.query.nome
    console.log('Ciao' +nome)
    res.send('Ciao' +nome)
  })


 app.get('/somma', function (req, res) {
    let a
    let b
    a=req.query.a
    b=req.query.b
    c= a -(-b);
    res.send('somma ' +c)
  })

app.get('/sottrazione', function (req, res) {
    let a
    let b
    a=req.query.a
    b=req.query.b
    c= a -b;
    res.send('sottrazione ' +c)
  })

app.get('/divisione', function (req, res) {
    let a
    let b
    a=req.query.a
    b=req.query.b
    c= a/b;
    res.send('divisione' +c)
  })

  app.get('/moltiplicazione', function (req, res) {
    let a
    let b
    a=req.query.a
    b=req.query.b
    c= a*b;
    res.send('moltiplicazione ' +c)
  })
  app.get('/uppercase', function (req, res) {
    let a
    a=req.query.a
    b= a.toUpperCase()
    res.send('MAIUSCOLO ' +b)
  })

app.get('/meteo', function (req, res) {
console.log("coordinate: ", req.query.lat, req.query.lon);
axios.get(
    "https://api.openweathermap.org/data/2.5/weather?lat=?"+
    req.query.lat + 
    "&lon="+
    req.query.lon +
    "3fed7a0af2a91e5f06d61f30cd4b8945"
)
.then(function(response){
console.log(response.data);
res.send(response.data.weather[0].descripttion)
})
.cotch(function(error){
    //handle error
    console.log(error);

});
  });

app.listen(3000)

//