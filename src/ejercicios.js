// @TODO Completar...
const contenedor = document.getElementById('contenedor');

let lista = new DocumentFragment()

lista.forEach(function () {
    for ( i=0, i == 50, i++){
  var li = document.createElement('li')
  li.innerHTML = lista
  lista.appendChild(li)
    }
})

lista.appendChild(lista);

