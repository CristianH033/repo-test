var btn = document.getElementById("btn-agregar");
var input = document.getElementById("input-item");
var lista = document.getElementById("lista-items");

function agregarItem(){
    var texto = input.value;
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(texto));
    lista.appendChild(item);
}

btn.addEventListener('click', agregarItem);


