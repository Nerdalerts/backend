const http = require('http')
const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.end('welcome to our homepage')
  }
  else if(req.url === '/about'){
    res.end('this is about our website')
  }
  else{
    res.end(`
      <h1>OOPS!</h1>
      <p>the wesbite you are looking for is not available</p>
      <a href = "/">back home</a>`
    )
  }
})

server.listen(5000)