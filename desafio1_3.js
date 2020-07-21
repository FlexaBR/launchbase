const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

function checaSeUsuarioUsaCSS(usuario) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false
  
  for (let tecnologia of usuario.tecnologias) {
    const encontreiTecnologiaCSS = tecnologia === 'CSS'
    if(encontreiTecnologiaCSS) {
      return true
    }
  }

  return false
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  }
}

const financeiros = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

// números é um array
function somaNumeros(numeros) {
  // Soma todos números dentro do array "numeros"
  let soma = 0;
  for (let numero of numeros) {
    soma = soma + numero
  }
  // retorna a soma dos números
  return soma
}

// função calculaSaldo recebe receitas e despesas do FINACEIRO
function calculaSaldo(receitas, despesas) {
  // precisa usar a função somaNumeros
  const somaReceitas = somaNumeros(receitas);
  const somaDespesas = somaNumeros(despesas);

  // deve retornar receitas - despesas
  return somaReceitas - somaDespesas
}

// percorre o array de financeiros
for (let financeiro of financeiros) {
  // para cada financeiro
  // chame uma função calculaSaldo
  const saldo = calculaSaldo(financeiro.receitas, financeiro.despesas)

  // se Saldo é positivo ou negativo
  const saldoPositivo = saldo >= 0

  let positivoOuNegativo;

  if (saldoPositivo) {
    positivoOuNegativo = "POSITIVO"
  } else {
    positivoOuNegativo = "NEGATIVO"
  }

  console.log(`${financeiro.nome} possui saldo ${positivoOuNegativo} de ${saldo.toFixed(2)}`)
  
}