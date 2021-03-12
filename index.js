// index.js
const { fetchBreedDescription } = require('./breedFetcher');
//const userInput = process.argv[2];
const breedName = process.argv[2];



fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});


