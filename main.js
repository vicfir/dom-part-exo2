document.querySelector("h1").innerText="Les attributs class et id";

document.querySelector("h2").innerText="Exercice 2 partie A";

document.querySelectorAll("h2")[1].innerText="Exercice 2 partie B";

document.querySelector("p").innerHTML="L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>";

document.querySelectorAll('p')[1].innerHTML="La manipulation de l'attribut Style peut-être une <i>solution</i> rapide";

//partie2
document.querySelector("h1").setAttribute("id","bigTitle");

document.querySelector("div").setAttribute("class","container");

let titre2 = document.querySelectorAll("h2");
titre2.forEach(element => {
    element.setAttribute("class", "title");
});

let para = document.querySelectorAll("p");
para.forEach(element => {
    element.setAttribute("classe", "text");
});

//partie3
document.querySelector("section").setAttribute("class", "margin-bottom border-black padding");

document.querySelectorAll("section")[1].setAttribute("class", "margin-top border-black padding");

document.querySelectorAll("div")[1].parentElement.style.background ="blue";
document.querySelectorAll("div")[1].parentElement.style.border ="thick solid red";
document.querySelectorAll("div")[1].parentElement.style.width="20px";
document.querySelectorAll("div")[1].parentElement.style.height="20px";
