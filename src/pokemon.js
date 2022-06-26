export async function getAllPokemon(url){
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      })
  })
  }

  export async function getPokemon(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(response => response.json())
      .then(data => {
        resolve(data);
      });
    })
  }