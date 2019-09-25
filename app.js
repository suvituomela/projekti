const fetch = require('node-fetch');
const fs = require('fs');

let date = new Date();
let d = date.getDate();
let m = date.getMonth() + 1;
let y = date.getFullYear();
let myrtsi = 16365;
let data = [];
console.log(d, m, y)

fetch('https://www.sodexo.fi/ruokalistat/output/daily_json/'+myrtsi+'/'+y+'/'+m+'/'+d+'/fi')
    .then(function(response){
        if(response.ok){
            return response.json();
        } else{
            throw new Error('Response not ok');
        }
    })
    .then(function(myJson) {
        console.log(myJson.courses.length);
        myJson.courses.forEach((t) => data.push({name: t.title_fi, price: t.price}));
        console.log(data);

        fs.writeFile('public/ruoka.json', JSON.stringify(data), (err) => {
            if(err) throw err;

        });
        console.log(JSON.stringify(myJson.data[0].name))
    })
    .catch(function(e) {
        console.log( e.message, data);

    });