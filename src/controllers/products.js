const con = require('../database/connection');

const updateProductPrice = async (req, res) => {
    const {id} = req.params;   
    
}

const listProducts = async (req, res) => {            
        const [query] = await con.execute('SELECT * FROM products.products');           
        return res.status(200).json(query);
}

module.exports = {
    updateProductPrice,
    listProducts
}