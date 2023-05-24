// const express = require('express');
const {
  userRoutes,
  productRoutes,
  CartRoutes,
  orderRoutes,
} = require("../service/routesIndex");
const path = require("path");
const app = express();
const serverless = require("serverless-http");

const router = express.Router();

router.use("/user", userRoutes);
router.use("/product", productRoutes);
router.use("/cart", CartRoutes);
router.use("/order", orderRoutes);

app.use("/api", router);

// Serve static files from the "Client/build" directory
app.use(express.static(path.join(__dirname, "../../Client/build")));

// Serve the index.html file for any other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../Client/build/index.html"));
});

// Export the app as a Netlify serverless function
module.exports.handler = serverless(app);
