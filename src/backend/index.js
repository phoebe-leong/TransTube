PORT = 8000

const express = require("express")
const app = express()

/* BOILERPLATE FILES */

app.get("/", (req, res) => {
	res.sendFile("../index.html", {root: __dirname})
})
app.get("/style.css", (req, res) => {
	res.sendFile("../style.css", {root: __dirname})
})
app.get("/script.js", (req, res) => {
	res.sendFile("../script.js", {root: __dirname})
})

/* END BOILERPLATE FILES */

app.get("/watch", (req, res) => {
	res.sendFile("../watch.html", {root: __dirname})
})

/* INITIATING THE SERVER */

app.listen(PORT, () => {
	console.log(`Hosting server on port ${PORT}`)
})