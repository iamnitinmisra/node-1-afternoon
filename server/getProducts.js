const products = require('../products.json');

const getProducts = (req, res) => {
    if(req.query.price){
        const item = products.filter(val => val.price >= parseInt(req.query.price));
        return res.status(200).send(item)
    }
    res.status(200).send(item);
}

const getProduct = (req, res) => {
    // find returns the item if it finds it, or undefined if not
    const item = products.find(val => val.id === parseInt(req.params.id));
    if (!item) {
        return res.status(500).send("Item not in list");
    }
    res.status(200).send(item);
}


module.exports = getProducts, getProduct;
// module.exports = getProduct;