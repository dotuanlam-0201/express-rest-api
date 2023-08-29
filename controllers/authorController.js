const { Author, Book } = require("../model/model")
const authorController = {
    addAuthor: async (req, res) => {
        try {
            const newAuthor = Author(req.body)
            const saveAuthor = await newAuthor.save()
            res.status(200).json(saveAuthor)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    findAuthor: async (req, res) => {
        const { id } = req.params
        try {
            const author = await Author.findById(id).populate("books")
            res.status(200).json(author)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    findAuthors: async (req, res) => {
        try {
            const author = await Author.find({}).populate("books")
            res.status(200).json(author)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteById: async (req, res) => {
        const { id } = req.params
        try {
            const author = await Author.findByIdAndRemove(id)
            await Book.findOneAndRemove({
                author: id
            })
            res.status(200).json(author)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateAuthor: async (req, res) => {
        const { id } = req?.params
        try {
            const author = await Author.findById(id).updateOne({
                $set: req.body
            })
            res.status(200).json(author)
        } catch (error) {
            res.status(500).json(error)
        }
    },
}

module.exports = authorController