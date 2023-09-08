const db = require('../database/connection');
const csv = require('csv-parser');
const fs = require('fs');
const results = [];

fs.createReadStream('../../file/atualizacao_preco_exemplo.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results);
        // [ { product_code: '16', new_price: '25.50' } ]
    });

/* if (!product_code && !new_price) {
    return res.status(400).json({"mensagem": "Todos os campos devem ser informados."});
}

const [query] = await con.execute('SELECT code FROM products.products');

    let existsCode = false;

    query.forEach((obj) => {    
        if(Number(id) === Number(obj.code)){
            existsCode = true;     
        }
    })
    
    if(!existsCode) {
        return res.status(400).json({"mensagem": "O código informado não existe."});
    }

    return res.status(200).json({"mensagem": "Tudo OK até aqui."}); */