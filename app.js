const http = require('http')
const { getProducts, getProduct, createProduct } = require('./controllers/productController')

// http.createServer(function (req, res, err){
//     if(req.url === '/'){
        
//         fs.readFile('index.html', (err, data) =>{
//             res.writeHead(200, {'Content-Type': 'text/html'})
//             res.write(data)
//             res.end()
//         })
        
//     } else if (req.url === '/getdata'){
//         const payload = {
//                 name: 'Rabeeh'
//             }
//             res.writeHead(200, {"Content-Type":"application/json"})
//             res.write(JSON.stringify(payload))
//             res.end()
//         } else {
//         res.writeHead(404, {'Content-Type': 'text/html'})
//         res.write('error')
//         res.end()
//     }
    
    

// }).listen(4000, ()=>{console.log('listening')})

const server = http.createServer((req, res) => {
    
    if(req.url === `/api/products` && req.method === 'GET'){
        // res.writeHead(200, {'Content-Type': 'application/json'})
        // res.end(JSON.stringify(products))
        getProducts(req, res)
    } else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET'){ /* Reg Expression */
        const id = req.url.split('/')[3]
        getProduct(req, res, id)
    } else if(req.url === '/api/products' && req.method === 'POST'){
        createProduct(req, res)
    } else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET'){ 
             
        }else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'Route Not Found'}))
    }
})

const PORT = 5000

server.listen(PORT, () => {console.log("Server running on 5000")})