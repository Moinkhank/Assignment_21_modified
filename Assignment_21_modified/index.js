const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomValue = Math.floor(Math.random() * 10) + 1;
    if (randomValue <= 6) {
      resolve(randomValue);
    } else {
      reject("Random value is greater than 6");
    }
  }, 1000);
});
  
promise
  .then((randomValue) => {
    console.log( "The random value is "+randomValue);
  })
  .catch((error) => {
    console.error(error);
  });