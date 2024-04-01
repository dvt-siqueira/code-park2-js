console.log('conectou');
const h1 = document.getElementById("titulo");
const alink = document.querySelector("a");
const dataOl = document.querySelector("ol")
const dataUl = document.querySelector("ul")

console.log(alink);

h1.innerText = "Titulo do H1";

alink.innerHTML = "Link dinamico da Proz";
dataOl.innerHTML=
        `<li>Oi</li>
        <li>Tchau</li>
        <li>Bye Bye</li>`;
dataUl.innerHTML=
        `<li>UL - Oi</li>
        <li>UL - Tchau</li>
        <li>UL - Bye Bye</li>`