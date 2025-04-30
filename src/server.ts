import express from "express"


const app = express()

const PORT = 3333

const HOST = "localhost"
const URL = `http://${HOST}:${PORT}`

console.log("Server running at:", URL)

app.listen(PORT, HOST, () => {
    console.log(`Server running at: ${URL}`)
})



app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World!")
})


app.get("/api", (req, res) => {
    res.json({ message: "Hello from the API!" })
})
app.get("/api/health", (req, res) => {

    res.json({ status: "ok" })
}
)   

app.get("/api/healthz", (req, res) => {
    res.json({ status: "ok" })
})

app.get("/api/healthcheck", (req, res) => {
    res.json({ status: "ok" })
})

app.get("/api/health-check", (req, res) => {
    res.json({ status: "ok" })
})
app.get("/api/health-checks", (req, res) => {
    res.json({ status: "ok" })
})

app.get("/api/health-checks/:id", (req, res) => {
    const id = req.params.id
    res.json({ status: "ok", id })
})

app.get("/api/health-checks/:id/:name", (req, res) => {
    const id = req.params.id
    const name = req.params.name
    res.json({ status: "ok", id, name })
})


app.get("/api/health-checks/:id/:name/:age", (req, res) => {
    const id = req.params.id
    const name = req.params.name
    const age = req.params.age
    res.json({ status: "ok", id, name, age })
})

app.get("/api/health-checks/:id/:name/:age/:city", (req, res) => {
    const id = req.params.id
    const name = req.params.name
    const age = req.params.age
    const city = req.params.city
    res.json({ status: "ok", id, name, age, city })
})


app.get("/api/health-checks/:id/:name/:age/:city/:country", (req, res) => {
    const id = req.params.id
    const name = req.params.name
    const age = req.params.age
    const city = req.params.city
    const country = req.params.country
    res.json({ status: "ok", id, name, age, city, country })
})
app.get("/api/health-checks/:id/:name/:age/:city/:country/:zip", (req, res) => {
    const id = req.params.id
    const name = req.params.name
    const age = req.params.age
    const city = req.params.city
    const country = req.params.country
    const zip = req.params.zip
    res.json({ status: "ok", id, name, age, city, country, zip })
})





app.use(express.json())





