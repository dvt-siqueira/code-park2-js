console.log('conectou');
const h1 = document.getElementById("titulo");
const alink = document.querySelector("a");
const dataOl = document.querySelector("ol")

console.log(alink);

h1.innerText = "Titulo do H1";

alink.innerHTML = "Link dinamico da Proz";
dataOl.innerHTML="<li>Oi</li><li>Tchau</li><li>Bye Bye</li>"