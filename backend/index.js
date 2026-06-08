const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const pdfRoutes = require('./routes/pdfRoutes')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/pdf', pdfRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})