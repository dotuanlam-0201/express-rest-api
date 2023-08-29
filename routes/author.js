const router = require("express").Router()
const authorController = require("../controllers/authorController")
const bodyParser = require("body-parser");

//author routes
router.post('/add', bodyParser.json(), authorController.addAuthor)
router.get('/find/:id', bodyParser.json(), authorController.findAuthor)
router.post('/find/', bodyParser.json(), authorController.findAuthors)
router.post('/delete/:id', bodyParser.json(), authorController.deleteById)
router.post('/update/:id', bodyParser.json(), authorController.updateAuthor)

//book routes
module.exports = router 