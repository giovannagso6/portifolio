const projetos = [
{ título:"Portifólio",descricao:"Meu site com 4 páginas no ar."},
{título:"Protótipo do figma", descricao:"Site fictício"},
{título:"Viagens pelos continentes", descricao:"Site que possuí ideias de lugares para visitar"},
{título: "Site de curiosidades sobre Veloezes & Furiosos", descricao:"Curiosidades e informações sobre a franquia"},
];

const listaProjetos= document.querySelector("#lista-projetos");

function criarCard(projeto) {
    const card = document.createElement("section");
    card.classList.add("card");
    const título=document.createElement("h2");
    título.textContent= projeto.título;
    const texto=document.createElement("p");
    texto.textContent=projeto.descricao;
    card.appendChild(título);
    card.appendChild(texto);
    listaProjetos.appendChild(card);
}

for (const projeto of projetos) {
    criarCard(projeto);
}