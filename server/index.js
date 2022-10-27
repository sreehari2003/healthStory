const express = require('express');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()

app.get('/', async (req, res) => {
    res.send("Hello World");
})

app.post('/post', async (req, res) => {
    const { title, content, authorEmail } = req.body
    const post = await prisma.post.create({
        data: {
            title,
            content,
            published: false,
            author: { connect: { email: authorEmail } },
        },
    })
    res.json(post)
})

const server = app.listen(3000)