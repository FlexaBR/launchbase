const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get("/", function(req, res) {
  const about = {
    avatar_url: "https://avatars0.githubusercontent.com/u/40006375?s=460&v=4",
    name: "Mayk Brito",
    role: "Instrutor - Rocket",
    description: 'Programador full-stack, focado em trazer o melhor ensino para <a href="https://rocketseat.com.br/" target="_blanck">Rocketseat</a>',
    links: [
      { name: "Github", url: "https://github.com/maykbrito" },
      { name: "Twitter", url: "https://www.twitter.com/kbrito/" },
      { name: "Linkedin", url: "https://www.linkedin.com/in/maykbrito/" }
    ]
  }

  return res.render("about", { about })
})

server.get("/portfolio", function(req, res) {
  return res.render("portfolio", { items: videos })
})

server.get("/video", function(req, res) {
  const id = req.query.id

  const video = videos.find(function(video){
    return video.id == id
  })

  if (!video) {
    return res.send("Vídeo not found!")
  }

  return res.render("video", { item: video })
})

server.listen(5000, function() {
  console.log('Server is running')
})