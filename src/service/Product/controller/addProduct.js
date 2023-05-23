// const {ProductModal} = require("../models/index");
// const logger = require("../../../utils/logger");
// module.exports = async (req, res) => {
// 	try {
// 		const {title,brand,available, desc, img,categories,size,color,price,productCode,features,discountPercentage,ratings} =req.body;
// 		let product = {title,brand,available,desc,img,categories,size,color,price,productCode,features,discountPercentage,ratings};
// 		const sameUserExist = await ProductModal.exists({productCode});
// 		if (sameUserExist) throw Error(`Product with title(${title}) and productCode(${productCode}) already exist.`);

// 		const newProduct = await new ProductModal(product).save();

// 		// newProduct.password = undefined;
// 		logger.info(`newProduct on ${newProduct}...`);
// 		res.status(200).send({
// 			success: true,
// 			newProduct: newProduct,
// 			message: "Product Added successfully",
// 		});
// 	} catch (error) {
// 		res.status(400).send({
// 			success: false,
// 			error: error.toString(),
// 		});
// 	}
// };
const {ProductModal} = require("../models/index");
const logger = require("../../../utils/logger");
const fs = require("fs");

module.exports = async (req, res) => {
	try {
		const {title, brand, desc, img, categories, size, color, price, productCode, features, discountPercentage, ratings} = req.body;
		let product = {title, brand, desc, categories, size, color, price, productCode, features, discountPercentage, ratings};
		
		// Read the image file into a Buffer object using createReadStream()
		const imageStream = fs.createReadStream(img);
		const chunks = [];
		imageStream.on('data', (chunk) => chunks.push(chunk));
		imageStream.on('end', () => {
			const imageData = Buffer.concat(chunks);
			// Add the image data to the product object
			product.img = imageData;
			saveProduct();
		});

		const sameUserExist = await ProductModal.exists({productCode});
		if (sameUserExist) throw Error(`Product with title(${title}) and productCode(${productCode}) already exist.`);

		const saveProduct = async () => {
			const newProduct = await new ProductModal(product).save();
			logger.info(`newProduct on ${newProduct}...`);
			res.status(200).send({
				success: true,
				newProduct: newProduct,
				message: "product added successfully",
			});
		};
	} catch (error) {
		res.status(400).send({
			success: false,
			error: error.toString(),
		});
	}
};

