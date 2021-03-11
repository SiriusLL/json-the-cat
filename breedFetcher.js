//require request and fs, variable for unquiried "baseUrl" url & user input
const request = require("request");                                             
const fs = require("fs");
let baseUrl = `https://api.thecatapi.com/v1/breeds/search?q=`;
const userInput = process.argv[2];
//const fPath = process.argv[3];

//function takes in user input of breed and call back to return data to access data
//variable for url appends breedname onto quiry
const breed = function (breedName, getBread) {
  const url = `${baseUrl}${breedName}`;
  //request url with function that calls errors, responses, and body
  request(url, (error, response, body) => {
    //parses the body array into a readable array containing and object
    const data = JSON.parse(body);
    //check if there is an error through request param, or if there is no data
    if (error || !data.length) {
      console.log(`${breedName} not found!!!`);
      return;
    }
    //calls the getBread function with param of data object key to retrieve description
    getBread(data[0].description);
  });
};
//is called to get info out of the breed function
const getBread = function (breed) {
  console.log(breed);
  return breed;
};

// Use the callback based approach we've been learning so far
console.log(breed(userInput, getBread));
