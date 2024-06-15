const axios = require('axios');

// axios.get('https://dog.ceo/api/breeds/image/random')
//   .then(respose => {
//     console.log(respose.data)
//   })
//   .catch(error => {
//     console.error(error);
//   });


// axios.get('https://dog.ceo/api/breed/boxer/images/random')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

let razas = [];
axios.get('https://dog.ceo/api/breed/hound/list')
  .then(response => {
    razas = response.data.message;
    console.log(razas);
    razas.map((raza) => {
      axios.get(`https://dog.ceo/api/breed/hound/${raza}/images`)
      //axios.get(`https://dog.ceo/api/breed/afghan/images`)
        .then(response => {
          console.log(response.data.message);
        }).catch(error => {
          console.error(error);
        })
    });
    
    

  })
  .catch(error => {
    console.error(error);
  });
