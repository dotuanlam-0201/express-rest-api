const router = require("express").Router()
const bodyParser = require("body-parser");
const bookController = require("../controllers/bookController");


router.post('/', bodyParser.json(), bookController.findBooks)
router.post('/add', bodyParser.json(), bookController.addBook)
router.get('/find/:id', bodyParser.json(), bookController.findBook)
router.post('/update/:id', bodyParser.json(), bookController.updateBook)
router.post('/delete/:id', bodyParser.json(), bookController.deleteBook)

module.exports = router 