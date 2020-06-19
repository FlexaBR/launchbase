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
  {
    nome: 'Novo Aluno',
    nota: 7
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
  {
    nome: 'Ula',
    nota: 5
  },
]

function calculaMedia(alunos) {
  let soma = 0;
  for (let i=0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota
  }
  const media = soma / alunos.length

  return media
}

const mediaA = calculaMedia(turmaA)
const mediaB = calculaMedia(turmaB)

function enviaMensagem(media, turma) {
  if (media >= 5) {
    console.log(`A media da ${turma} foi de ${media}. Parabéns!`)
  } else {
    console.log(`A média da ${turma} foi de ${media}. Se fu!`) 
  }
}

enviaMensagem(mediaA, 'turma A')
enviaMensagem(mediaB, 'turma B')
