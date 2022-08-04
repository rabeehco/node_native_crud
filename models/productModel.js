const products = require('../data/products')
const {v4: uuidv4} = require('uuid')
const {writeDataToFile} = require('../utils')

function findAll() {
    return new Promise((resolve, reject) => {
            resolve(products)
    })
}

function findById(id) {
    
    return new Promise((resolve, reject) => { 
            const product = products.find((eachProduct) => eachProduct.id === id) 
            
            resolve(product)
    })
}

function create(product) {
    return new Promise((resolve, reject) => {
        id = `${products.length + 1}`
        const newProduct = {id, ...product} /* id: uuidv4() */
        products.push(newProduct)
        writeDataToFile('./data/products.json', products)
        resolve(newProduct)
    })
}

module.exports = {
    findAll,
    findById,
    create
}