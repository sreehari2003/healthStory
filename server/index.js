const express = require('express');
const { PrismaClient } = require('@prisma/client')
require('dotenv').config()

const app = express()
app.use(express.json({ extended: true }))

const prisma = new PrismaClient()
async function main() {
    // Connect the client
    await prisma.$connect()
    // ... you will write your Prisma Client queries here
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })


app.get('/', async (req, res) => {
    res.send("Hello World");
})

// Doctor Routes //
app.get('/doctor/:uid', async (req, res) => {
    const posts = await prisma.doctor.findUnique({
        where: { uid: req.params.uid }
    })
    res.send(posts)
})

app.post('/doctor', async (req, res) => {
    const user = await prisma.doctor.create({
        data: {
            "name": req.body.name,
            "email": req.body.email,
            "photo": req.body.photo,
            "uid": req.body.uid,
            "qualification": req.body.qualification,
            "passyear": req.body.passyear,
            "College": req.body.College
        },
    })
    res.send(user)
})

const server = app.listen(3000)