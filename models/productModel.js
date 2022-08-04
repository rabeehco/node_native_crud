let products = require('../data/products')
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

function update(id, product) {
    return new Promise((resolve, reject) => {
        const index = products.findIndex((p) => p.id === id)
        products[index] = {id,  ...product }

        writeDataToFile('./data/products.json', products)
        resolve(products)
    })
}

function remove(id) {
    return new Promise((resolve, reject) => {
        products = products.filter((p) => p.id !== id)

        writeDataToFile('./data/products.json', products)
        resolve()
    })
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}