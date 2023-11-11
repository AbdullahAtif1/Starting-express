
const express = require("express")
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	console.log("Here")
	// res.send("Haq Khwaja, Sach Khwaja") // Same as django's HttpResponse

	// res.status(500).send("Internal Server error")
	res.render("index", {ismeGerami: "Baba Ji Muhammad Nawaz Ghulam Khwajgi"})

})




app.listen(3000)
