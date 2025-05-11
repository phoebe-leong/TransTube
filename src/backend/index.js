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
app.get("/channel", (req, res) => {
	res.sendFile(path.resolve("../channel.html"))
})
app.get("/upload", (req, res) => {
	res.sendFile(path.resolve("../upload.html"))
})

app.get("/index.css", (req, res) => {
	res.sendFile(path.resolve("../index.css"))
})
app.get("/watch.css", (req, res) => {
	res.sendFile(path.resolve("../watch.css"))
})
app.get("/channel.css", (req, res) => {
	res.sendFile(path.resolve("../channel.css"))
})
app.get("/upload.css", (req, res) => {
	res.sendFile(path.resolve("../upload.css"))
})

/* TEST DATA */

app.use("/testing", express.static("../../test_data"))

/* 404 PAGE */

app.get("/not-found.css", (req, res) => {
	res.sendFile(path.resolve("../not-found.css"))
})

app.use((req, res, next) => {
	res.status(404).sendFile(path.resolve("../not-found.html"))
})

/* INITIATING THE SERVER */

app.listen(PORT, () => {
	console.log(`Hosting server on port ${PORT}`)
})