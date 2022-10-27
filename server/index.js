const express = require('express');
const { PrismaClient } = require('@prisma/client')
require('dotenv').config()

const prisma = new PrismaClient()
const app = express()

app.get('/', async (req, res) => {
    res.send("Hello World");
})

const server = app.listen(3000)