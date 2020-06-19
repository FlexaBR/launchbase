const nome = "Carlos";
const peso = 77;
const altura = 1.79;

const imc = peso / (altura * altura);

if(imc >= 30) {
  console.log(`${nome} você está acima do peso`)
} else {
  console.log(`${nome} você não está acima do peso`)
} 

const nomeA = "Silvano";
const sexo = "M";
const idade = 55;
const contribuicao = 35;

if(sexo === "F") {
  if(contribuicao>= 30){
    if((idade + contribuicao) >= 85) {
      console.log(`${nomeA}, você pode se aposentar!`)
    } else {
      console.log(`${nomeA}, você ainda não pode se aposentar!`)
    }
  } else {
    console.log(`${nomeA}, você ainda não pode se aposentar!`)
  }
} else {
  if(sexo === "M") {
    if(contribuicao>= 35){
      if((idade + contribuicao) >= 95) {
        console.log(`${nomeA}, você pode se aposentar!`)
      } else {
        console.log(`${nomeA}, você ainda não pode se aposentar!`)
      }
    } else {
      console.log(`${nomeA}, você ainda não pode se aposentar!`)
    }
  }
}