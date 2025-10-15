import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

const TIMEOUT = 10000

app.use(cors())

// Cat Fact API Middleware
app.use('/me', async (req, res, next) => {
    let fact = "No facts yet. " // placeholder fact
    let statusCode

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), TIMEOUT) // timeout after 10 seconds

    try {
        const response = await fetch("https://catfact.ninja/fact", {
            signal: controller.signal,
            headers: {
                "Content-Type": "application/json",
            }
        })

        if (!response.ok){
            fact = "Could not fetch a cat fact at this time. There was an error."
            statusCode = response.status
            console.log("Failed with status " + response.status)
        } else {
            const data = await response.json()
            fact = data.fact
            statusCode = 200
            console.log("Fetched successfully")
        }
    } catch (error) {
        fact = "Could not fetch a cat fact at this time. "

        if (error.name === "AbortError"){
            fact += "Request timed out."
            console.log("Request timed out")
            statusCode = 408 // Request timed out
        } else {
            fact += "There was an error."
            console.log("Failed to fetch: " + error)
            statusCode = 500
        }
    } finally {
        clearTimeout(timeout)
    }

    req.fact = fact
    req.statusCode = statusCode
    next()
})

app.get('/me', (req, res) => {
    res.status(req.statusCode).json({
        "status": "success",
        "user": {
            "email": "victorwaribokowest@gmail.com",
            "name": "Victor Wariboko-West",
            "stack": "Node.js/Express"
        },
        "timestamp": new Date().toISOString(),
        "fact": req.fact
    })
})

app.listen(PORT, () => console.log(`Running on port ${PORT}!`))