const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener("click", function() {
    const conteudoId = card.getAttribute("id")
    
    modalOverlay.classList.add('active')
    // adiciona conteudo
    modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${conteudoId}`

  })
}

document.querySelector(".close-modal").addEventListener("click", function() {
  modalOverlay.classList.remove("active")
  // remove video
  modalOverlay.querySelector("iframe").src = ""
})

