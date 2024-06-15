

fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((error) => {
    console.error(error);
  });

