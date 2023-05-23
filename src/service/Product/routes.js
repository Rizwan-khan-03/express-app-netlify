const Router = require("express").Router();
const { verifyTokenAndAdmin ,verifyTokenAndAuthorization,verifyToken } = require("../Auth/AuthMiddlewares");
const {
    addProduct,
    getAllProducts,
    getProduct,
    productByFilters,
    updateProduct,
    deleteProduct
} = require("./controller/index");



// add product 
Router.post("/addproduct",verifyTokenAndAdmin, addProduct);

// get product
Router.get("/:id", verifyToken,getProduct);
//update product
Router.put("/update", verifyTokenAndAdmin,updateProduct);
// get all user
Router.get("/", verifyToken,getAllProducts);
// get  product by dates filter
Router.get("/filter", verifyToken,productByFilters);
Router.delete("/:id", verifyTokenAndAdmin,deleteProduct);



module.exports = Router;