
const request = require("request");
//const fs = require("fs");



const breed = function(breedName, callBack) {                          //{1} function breed runs with param breed name that we get from first param on index (userInput --> breedName) and sec of callback that sends the error true or null, and description 
  let baseUrl = `https://api.thecatapi.com/v1/breeds/search?q=`;
  const url = `${baseUrl}${breedName}`;
  //request url with function that calls errors, responses, and body
  request(url, (error, response, body) => {                                           //responce fullfilled , pending , rejected  gives an object ---promise request takes the url and returns anny error , response and body
    
    
    //check if there is an error through request param, or if there is no data
    if (error || !body.length) {                                      //if error passes the error through call back of this functionton to breed on index
      
      return callBack(error, null);
    
    } else {
      const data = JSON.parse(body);                                  //else does the things and send null error and the description through the call back {2--->}
      const catData = data[0];
      callBack(null, catData.description);
    }
    
  });
};


module.exports = {breed};
