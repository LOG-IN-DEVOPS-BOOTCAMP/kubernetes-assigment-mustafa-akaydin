const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Merhaba, Kubernetes!\n')
})

const port = process.env.PORT || 8080

server.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`)
})
