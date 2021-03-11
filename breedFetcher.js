
const request = require('request');
const fs = require('fs');
let url = `https://api.thecatapi.com/v1/breeds/search?q=`
const breadName = process.argv[2];
//const fPath = process.argv[3];



const bread = function(breadName) {
  url += breadName;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    if (!data[0].breadName) {
      console.log(`${breadName} not found!!!`)
      return;
    }

      console.log(data[0].description);
      //console.log(typeof data);
    

  });
}

// Use the callback based approach we've been learning so far
bread(breadName);
