const cities = {
  sweden: "stockholm",
  france: "paris",
  irland: "dublin",
  spain: {
    madrid: "barcelona",
    lund: {
      denmark : "copenhagen"
    }
  }
};

const reverseCities = (obj) => {
  // allows an iterable such as an array expression or string
  // to be expanded in places where zero or more arguments
  // or elements are expected, or an object expression to be
  // expanded in places where zero or more key-value pairs are expected.
  const newcities = { ...cities, obj };
  Object.keys(obj)
  .forEach((key) => {
    // keyword that will return the type of a variable when you call it.
    if (typeof obj[key] !== "string") {
      reverseCities(obj[key]);
    } else {
      newcities[obj[key]] = key.split("").reverse().join("");
    }
  });
  return newcities;
};
console.log(reverseCities(cities));