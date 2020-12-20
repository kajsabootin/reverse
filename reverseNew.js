const cities = {
  sweden: "stockholm",
  france: "paris",
  spain: {
    madrid: "barcelona",
    lund: {
      sjöbo: "dalarna"
    }
  }
};

const reverseCities = (obj) => {
  const newCities = {};
  Object.keys(obj)
    .forEach((key) => {
      newCities[key] = obj[key];
      console.log(key);
    });
  return newCities;
};
console.log(reverseCities(cities))