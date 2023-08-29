const { Book, Author } = require("../model/model")

const bookController = {
    findBooks: async (req, res) => {
        try {
            const books = await Book.find({}).populate("author")
            res.status(200).json(books)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    addBook: async (req, res) => {
        const authorId = req?.body?.author
        try {
            const book = Book(req.body)
            const saveBook = await book.save()
            let author = await Author.findById(authorId)
            if (author) {
                await author.updateOne({
                    $push: {
                        books: book
                    }
                })
            }
            res.status(200).json(saveBook)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    findBook: async (req, res) => {
        const { id } = req.params
        try {
            const book = await Book.findById(id).populate("author")
            res.status(200).json(book)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateBook: async (req, res) => {
        const { id } = req?.params
        try {
            const book = await Book.findById(id).updateOne({
                $set: req.body
            })
            res.status(200).json(book)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteBook: async (req, res) => {
        const { id } = req?.params
        try {
            const book = await Book.findByIdAndDelete(id)
            await Author.updateMany({
                books: id
            }, {
                $pull: {
                    books: id
                    
                }
            })

            res.status(200).json(book)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = bookController