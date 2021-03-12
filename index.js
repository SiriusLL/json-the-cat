// index.js
const { breed } = require('./breedFetcher');                //starts here and required breed fetcher
//const userInput = process.argv[2];
const userInput = process.argv[2];                          //moved userInput from breedFetcher to here so we can start program from this page

breed(userInput, (error, description) => {                  //calls breed function with parameter user input and a call back with parameter of error and description ----> go to breedfetcher {1--->}
  if (error) {
    console.log('There is an error', error);        //{2} receives error and description data from breed on breedFetcher and runs through the conditions                  //
    //console.log(description);
  } else {
    console.log(description);
    //console.log(error);
  }
});




