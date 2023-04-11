
let getText = document.getElementById("text");
let camelText = document.getElementById("camel-case");
let pascaltext = document.getElementById("pascal-case");
let snakeText = document.getElementById("snake-case");
let scrsnakeText = document.getElementById("screaming-snake-case");
let kebabText = document.getElementById("kebab-case");
let scrkebabText = document.getElementById("screaming-kebab-case");
  
  let btn = document.getElementById("convert-btn");
const convertCase = () =>{
  const str = getText.value ;
  camelText.innerText = str.toLowerCase().split(/\s+/g).map((x,i) => i === 0 ? x : x[0].toUpperCase() + x.slice(1)).join('');
  pascaltext.innerText = str.toLowerCase().split(/\s+/g).map((x) => x[0].toUpperCase() + x.slice(1)).join('');
  snakeText.innerText = str.toLowerCase().replace(/\s+/g,'_');
  scrsnakeText.innerText = str.toUpperCase().replace(/\s+/g,'_');
  kebabText.innerText = str.toLowerCase().replace(/\s+/g,'-');
  scrkebabText.innerText = str.toUpperCase().replace(/\s+/g,'-');
}

btn.addEventListener("click", convertCase);


