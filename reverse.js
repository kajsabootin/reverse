const cities = { 
  sweden: "stockholm", 
  france: "paris", 
  spain: "madrid" 
};

//return a new object that has its key and value reversed.
const reverseCities = (obj) => {
  const newcities = {};
  Object.keys(obj).forEach((key) => {
    newcities[obj[key]] = key.split("").reverse().join("");
    // split reverse join kedjan är att
    // divide the word into an array with all the letters in it,
    // then flips the array and then assembles it into a string again
  });
  return newcities;
};
console.log(reverseCities(cities));