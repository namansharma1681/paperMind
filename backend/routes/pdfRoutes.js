const express = require('express')
const router = express.Router()
const multer = require('multer')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.post('/upload', upload.single('pdf'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' })
    }
    
    res.status(200).json({ message: 'File received successfully' })
})

module.exports = router