const titulo = document.getElementById("titulo");
const listaOrdenada = document.getElementById("lista-ordenada");
const link = document.querySelector("a");
const listaUl = document.querySelector("ul")

titulo.innerText = "inserindo titulo a tag h1"
link.innerText = "Clique aqui"
listaUl.innerHTML = `
    <li>Banana</li>
    <li>maça</li>
    <li>Uva</li>
`
listaOrdenada.innerHTML = `
    <li><a href = "">Google</a></li>
    <li><a href = "">Instagran</a></li>
    <li><a href = "">Face book</a></li>
    

`

