// Business Interface
const leapYear = function(yearInput){


};

  // User Interface
$(document).ready(function(){
  $("form#leap-year").submit(function(event){
    event.preventDefault();



  })
});    




// Behavior Order:

// Describe: `mr-robogers-neighborhood()`
// Test: The program will return a range of numbers from 0 to the users inputted number.
// Expect(pigLatin("apple")).toEqual("appleway");

// Test: The program will find words that begin with one or more consonants and move all of the first consecutive consonants to end of the word before adding 'ay' to the end.
// Expect(pigLatin("people")).toEqual("eoplepay");

// Test: The program will find words that begin with 'qu' and move the 'u' and the 'q' to the end before adding 'ay' to the end.
// Expect(pigLatin("queen")).toEqual("eenquay")'


// Test: The program will find words that begin with 'y' and treat it as a consonant before adding 'ay' to the end.
// Expect(pigLatin("yellow")).toEqual("ellowyay");