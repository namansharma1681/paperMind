const { GoogleGenerativeAI } = require('@google/generative-ai')

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'text-embedding-004' })

async function generateEmbeddings(chunks) {
    const embeddings = []
    
    for (const chunk of chunks) {
        const result = await model.embedContent(chunk)
        embeddings.push(result.embedding.values)
    }
    
    return embeddings
}

module.exports = { generateEmbeddings }