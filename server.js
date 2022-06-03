const express = require("express"); // get express
const app = express(); // get app
const data = require("./data.js"); // import product data and user data
const hbs = require("hbs"); // import handlebars

const staticPath = __dirname + "/public"; //get public file static path
app.use("/public", express.static(staticPath)); //serving static files
app.set("view engine", "hbs"); // set hb as default view engine
hbs.registerPartials("./views/partials"); // add partials file location
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
	res.render("index");
});
// app.get("/products", (req, res) => {
// 	let { limit } = req.query;
// 	let newProducts = data.map((product) => {
// 		let { id, title, price, category, image } = product;
// 		return { id, title, price, category, image };
// 	});
// 	if (limit) {
// 		newProducts = newProducts.slice(0, Number(limit));
// 	}
// 	res.json(newProducts);
// 	res.render("")
// });
app.get("/products", (req, res) => {
	res.render("products", { data });
});
// app.use("/login", loginRoutes);
// app.use("/register", registerRoutes);
// app.use("/api/products", productsRoutes);
app.get("*", (req, res) => {
	res.sendStatus(404);
});
app.listen(6969, () => {
	console.log("Sever is running at port no 6969");
});
