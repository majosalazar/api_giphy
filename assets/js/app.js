window.onload = () => {
  const btnBuscar = document.getElementById('buscar-gif');
  btnBuscar.addEventListener('click', () => {
    obtenerGif();
  })
};

function obtenerGif() {
  Promise.all([
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=e2NPBdzO4COHoVhO1KPCk8XqQioYIX06&q=&limit=25&offset=0&rating=G&lang=en`)
  ]).then((responses) => {
    return Promise.all(
      responses.map(
        (response) => {
          return response.json();
        }
      )
    );
  }).then((gifsJson) => {
    console.log("obtenerGif > " + JSON.stringify(gifsJson));
    const gifReceptorDiv = document.getElementById("gifReceptor");
    gifsJson.forEach((jsonElement) => {
      jsonElement.forEach((gif) => {
        const createGif = document.createElement('img'); //Aquí "almaceno" las imágenes
        const giphy = gifJson.data[i].images.fixed_width.url;
        let res = giphy.replace("media1", "i").replace("media2", "i").replace("media3", "i").replace("media0", "i");
        console.log(res);
        createGif.src = res;
        gifReceptorDiv.appendChild(createGif);
        
      }
      );
    });
  }).catch((error) => {

  });
}