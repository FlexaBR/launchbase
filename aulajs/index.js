// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média.

const aluno1  = 'Flexa'
const notaAluno01 = 9.8

const aluno2 = 'Joca'
const notaAluno02 = 10

const aluno3 = 'Juca'
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3


// Se a média for maior que 5, parabenizar a turma
if (media > 5) {
  // faz alguma coisa
  console.log(`A média foi de ${media}. Parabéns!`)
} else {
  // faz outra coisa
  console.log('A média é menor que 5.')
}