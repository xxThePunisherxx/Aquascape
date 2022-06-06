const express = require("express");
const app = express();
const data = require("./data.js");
const hbs = require("hbs");

const staticPath = __dirname + "/public";
app.use("/public", express.static(staticPath));
app.set("view engine", "hbs");
hbs.registerPartials("./views/partials");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/products", (req, res) => {
	res.render("products", { data });
});
app.use("/login", loginRoutes);
app.use("/register", registerRoutes);
app.use("/api/products", productsRoutes);
app.get("*", (req, res) => {
	res.sendStatus(404);
});
app.listen(6969, () => {
	console.log("Sever is running at port no 6969");
});
