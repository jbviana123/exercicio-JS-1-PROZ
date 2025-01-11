
const titulo = document.createElement("h1");
titulo.id = "titulo"
titulo.innerHTML = `
    <h1>Cadastro de produtos</h1>
    <h2>produto</h2>
    <ul>
        <li>Nome produto:</li>
        <li>Descrição:</li>
        <li>Preço:</li>
    </ul>
    <button>Comprar</button>
    <img src = "https://www.somosicev.com/wp-content/uploads/2021/12/amecaroboengineeredarts-2.jpg">
`
const body = document.querySelector("body")
body.appendChild(titulo)



