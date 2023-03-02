const express = require("express");
const app = express();
const { data, images } = require("./data.js");
const hbs = require("hbs");
let port = process.env.PORT || 6969;

const staticPath = __dirname + "/public";
app.use("/public", express.static(staticPath));
app.set("view engine", "hbs");
hbs.registerPartials("./views/partials");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
	res.render("index");
});
app.get("/gal", (req, res) => {
	res.render("galleryPage", { images });
});

app.get("/products", (req, res) => {
	res.render("products", { data });
});
app.get("/products/:productID", (req, res) => {
	let { productID: id } = req.params;
	let product = data[id - 1];
	res.render("individual", { product });
});
app.get("/const", (req, res) => {
	res.render("upcomming");
});

app.get("*", (req, res) => {
	res.sendStatus(404);
});
app.listen(port, () => {
	console.log("Sever is running at port no 6969");
});
