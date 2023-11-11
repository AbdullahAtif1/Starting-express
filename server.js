// So this file is more of a main urls.py file in Django. Holds all the urls paths for different apps/routes and then in thouse routes, we have the views/functionality and the views folder is the templates folder

const express = require("express")
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	console.log("Here")
	res.render("index", {ismeGerami: "Baba Ji Muhammad Nawaz Ghulam Khwajgi"})
})


const userRouter = require("./routes/users")
app.use("/users", userRouter)


app.listen(3000)
