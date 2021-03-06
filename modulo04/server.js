const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

server.use(express.urlencoded({ extended: true })) // faz funcionar o 'req.body'
server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.listen(5000, function() {
  console.log('🚀 Server started on port 5000  ');
})