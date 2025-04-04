PORT = 8000

const express = require("express")
const path = require("path")

const app = express()

/* BOILERPLATE FILES */

app.get("/", (req, res) => {
	res.sendFile(path.resolve("../index.html"))
})
app.get("/style.css", (req, res) => {
	res.sendFile(path.resolve("../style.css"))
})
app.get("/script.js", (req, res) => {
	res.sendFile(path.resolve("../script.js"))
})

/* END BOILERPLATE FILES */

app.get("/watch", (req, res) => {
	res.sendFile(path.resolve("../watch.html"))
})

/* INITIATING THE SERVER */

app.listen(PORT, () => {
	console.log(`Hosting server on port ${PORT}`)
})