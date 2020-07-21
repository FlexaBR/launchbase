const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

function createTransaction(transaction){
  // recebe objeto de transação  
  if (transaction.type === 'credit') {
    user.balance = user.balance + transaction.value
  }

  if (transaction.type === 'debit') {
    user.balance = user.balance - transaction.value
  }

  user.transactions.push(transaction)
} 

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance)
console.log(user)

function getHigherTransactionByType(type) {
  let maiorValor = 0
  let index = 0

  for (let i=0; i < user.transactions.length; i++) {
  
    
    if (user.transactions[i].type === type) {
      if (maiorValor >= user.transactions[i].value) {
        maiorValor = maiorValor
      } else {
        maiorValor = user.transactions[i].value
        index = i
      }
    }
  }
  console.log(user.transactions[index])
}

function getAverageTransactionValue() {
  let total = 0

  for (let i=0; i < user.transactions.length; i++) {
    total = total + user.transactions[i].value
  }

  const media = total / user.transactions.length

  console.log(media)
}

function getTransactionsCount() {
  let contaCredit = 0
  let contaDebit = 0

  for (let i=0; i < user.transactions.length; i++) {
  
    if (user.transactions[i].type === 'credit') {
      contaCredit = contaCredit + 1
    }
    if (user.transactions[i].type === 'debit') {
      contaDebit = contaDebit + 1
    }
  }
  
  console.log({ contaCredit, contaDebit})
}

getHigherTransactionByType("credit")
getHigherTransactionByType("debit")
getAverageTransactionValue()
getTransactionsCount()
