const turmaA = [
  {
    nome: 'Flexa',
    nota: 8
  },
  {
    nome: 'Joca',
    nota: 9
  },
  {
    nome: 'Thais',
    nota: 10
  },
]

const turmaB = [
  {
    nome: 'Juca',
    nota: 4
  },
  {
    nome: 'Mula',
    nota: 2
  },
  {
    nome: 'Bula',
    nota: 0
  },
]

function calculaMedia(alunos) {
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const mediaA = calculaMedia(turmaA)
const mediaB = calculaMedia(turmaB)

function enviaMensagem(media, turma) {
  if (media >= 5) {
    console.log(`A media da ${turma} foi de ${media}. Parabéns!`)
  } else {
    console.log(`A média da ${turma} é menor que 5`) 
  }
}

enviaMensagem(mediaA, 'turma A')
enviaMensagem(mediaB, 'turma B')
