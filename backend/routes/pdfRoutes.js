const express = require('express')
const router = express.Router()
const multer = require('multer')
const pdfParse = require('pdf-parse')
const { chunkText } = require('../utils/textChunker')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.post('/upload', upload.single('pdf'), async (req, res) => {
    try{
        if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' })
    }
    
    const data = await pdfParse(req.file.buffer)
    const text = data.text

    const chunks = chunkText(text)
    console.log('Total chunks:', chunks.length)
    
    console.log(text)
    
    res.status(200).json({ message: 'File received successfully', textLength: text.length })
} catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong' })
    }
})

module.exports = router