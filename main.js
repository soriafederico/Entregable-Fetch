function obtenerdatos(url) {
  let data = fetch(url)
    .then((res) => res.json())
    .then((json) => json);
  return data;
}


let divContenedor = document.getElementById("contenedor");

function cargarProductos(array) {
  for (let i = 0; i < array.length;i++){
    divContenedor.innerHTML += `<div class ="card"> 
    <img src="${array[i].image}" alt = "${array[i].description}">
    <p> ${array[i].title} </p>
    <p>Precio $ ${array[i].price}</p> </div>`;

  }
}
obtenerdatos("https://fakestoreapi.com/products")
.then ((data)  => cargarProductos(data))

  
  
  
