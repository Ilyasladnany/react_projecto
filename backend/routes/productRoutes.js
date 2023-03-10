const express= require ('express')
const routes = express.Router()
const {getAllProducts, getProductById, addProduct, updateProduct, deleteProduct}= require('../controllers/productController')

routes.route('/products').get(getAllProducts)
routes.route('/products/:idproduct').get(getProductById)
routes.route('/addproduct').post(addProduct)
routes.route('/update/:idproduct').patch(updateProduct)
routes.route('/delete/:idproduit').delete(deleteProduct)

module.exports= routes
