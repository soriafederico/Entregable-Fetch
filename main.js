
function obtenerdatos (url){

    fetch(url)
   
            .then(res=>res.json())
           // .then(json=>console.log(json))
            let procesado = JSON.parse(json)
             return procesado
           }



obtenerdatos('https://fakestoreapi.com/products/5')

let divContenedor = document.getElementById(contenedor)

function cargarProductos(objeto){
    for (let x in objeto){
        divContenedor.innerHTML += `<div class ="card"> 
        <img src="${objeto.image[x]}" alt = "${objeto.description[x]}">
        <p> ${objeto.title [x]}
        <p> ${objeto.price [X]}` 
    }

}

