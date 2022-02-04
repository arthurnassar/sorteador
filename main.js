// Função para mostrar as telas quando apertar um botão
var numWind = document.getElementById("number");
var pplWind = document.getElementById("name");

numWind.addEventListener("click", function () {
  document.getElementById("number-picker").style.display = "flex";
  document.getElementById("name-picker").style.display = "none";
})

pplWind.addEventListener("click", function () {
  document.getElementById("number-picker").style.display = "none";
  document.getElementById("name-picker").style.display = "flex";
})

// Função para adicionar campos quando clicar no botão +
function displayDate() {
  let temp = document.getElementById("line");
  console.log(temp);
  let inpute = document.createElement("input");
  inpute.className = "nomes";
  inpute.type = "text";
  temp.appendChild(inpute);
}

// Array para armazenar os nomes
var nomeStore = []

// Função para gravar todos os nomes em uma array
var subName = document.getElementById("submit-name");
var nomes = document.getElementsByClassName("nomes");

subName.onclick = function(){
  var i = 0;
  while(i<nomes.length){
    if(nomes[i].value != ""){
    nomeStore.push(nomes[i].value);
    }
    else{
  }
  i++;
}

  let np = nomeStore.length;
  let ns = Math.floor(Math.random() * np)
  document.getElementById("name-result").innerHTML = "O nome sorteado foi <br> " + nomeStore[ns];

// console.log(nomeStore);
// console.log(nomeStore.lenght);
// let numRandom = Math.floor(Math.random() * nomeStore.length);
// console.log(numRandom);
nomeStore.splice(0, nomeStore.length);
}



// função muito doida

// Função para fazer o sorteio de numero
var numSort = document.getElementById("submit-number");
numSort.onclick = function (){
  let numInput = document.getElementById("number-input");
  let resultado = Math.ceil(Math.random() * numInput.value)
  console.log(resultado);
  let textoNum = document.getElementById("number-result")
  textoNum.innerHTML = "O número sorteado foi " + "<br>" + resultado
}

document.getElementById("add-btn").addEventListener("click", displayDate);


