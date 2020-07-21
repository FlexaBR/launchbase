// create
exports.post = function(req, res) {
  const keys = Object.keys(req.body) // pega as chaves do formulário (nome dos campos)

  for(key of keys) {
    if (req.body[key] == "") { // se um dos campos estiver vazio, retorna erro
      return res.send('Please, fill all fields.')
    }
  }
  
  return res.send(req.body)
}


// update
// delete