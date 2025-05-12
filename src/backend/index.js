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
app.get("/login", (req, res) => {
	res.sendFile(path.resolve("../login.html"))
})
app.get("/signup", (req, res) => {
	res.sendFile(path.resolve("../signup.html"))
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
app.get("/login.css", (req, res) => {
	res.sendFile(path.resolve("../login.css"))
})
app.get("/signup.css", (req, res) => {
	res.sendFile(path.resolve("../signup.css"))
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