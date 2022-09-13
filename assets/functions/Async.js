const axios = require('axios').default;

function async (url, element = null) {    
    axios
      .get(url)
      .then((response) => {
        if (element != null) {
        $(`.${element}`).html(response.data);
        }
      })
      .catch((error) => {
        $(`.${element}`).parent().html = `Erreur: ${error.message}`;
        console.error("Il y a une erreur dans la requête", error);
      });
  };

  export {async};