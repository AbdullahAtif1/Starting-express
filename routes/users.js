// Setting up a miny application and exporting it to to the main app, just kike writing reusable apps in Django

const express = require("express")
const router = express.Router() // Independant bunch of urls and functions, that's why not naming it app

// RULE/STANDARD: Place staticroutes above the dynamic routes 


router.get('/', (req, res) => {
	res.send("Users Page")
})

router.get("/new", (req, res) => {
	res.send("New user")
})

// http://127.0.0.1:3000/users/2
// router.get("/:id", (req, res) => {
// 	res.send(`User with ID ${req.params.id}`)
// })

// router.put("/:id", (req, res) => {
// 	res.send(`User with ID ${req.params.id}`)
// })

// router.delete("/:id", (req, res) => {
// 	res.send(`User with ID ${req.params.id}`)
// })

// The above three have the same url, so we use somwthing like below

router
	.route("/:id")
	.get((req, res) => {
		console.log(req.name)
		res.send(`User with ID ${req.params.id}`)
	})
	.put((req, res) => {
		res.send(`Update user with ID ${req.params.id}`)
	})
	.delete((req, res) => {
		res.send(`Delete user with ID ${req.params.id}`)
	})


// Param is like a middleware. Middlewares run between the request and response.


const users = [{name: "Abdullah"}, {name: "Asadullah"}]
router.param("id", (req, res, next, id) => {
	// console.log(id)
	req.name = users[id].name
	next()
})

// Whenever it gets a url with a parameter "id", it will generate re.user variable which can be used inside the function response

module.exports = router

