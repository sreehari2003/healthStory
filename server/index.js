const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());

const { PrismaClient } = require("@prisma/client");
require("dotenv").config();

app.use(express.json({ extended: true }));

const prisma = new PrismaClient();
async function main() {
  // Connect the client
  await prisma.$connect();
  // ... you will write your Prisma Client queries here
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

app.get("/", async (req, res) => {
  res.send("Hello World");
});

// Doctor Routes //

app.post("/doctor", async (req, res) => {
  const exist = await prisma.doctor.findUnique({
    where: {
      uid: req.body.uid,
    },
  });
  if (exist) {
    return res.json({
      ok: true,
      message: "welcome back",
      data: exist,
    });
  }
  const user = await prisma.doctor.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      photo: req.body.photo,
      uid: req.body.uid,
      qualification: [],
      passyear: req.body.passyear,
      College: req.body.College,
    },
  });
  res.json({
    ok: true,
    message: "account was created",
    data: user,
  });
});

app.get("/doctor/:uid", async (req, res) => {
  const posts = await prisma.doctor.findUnique({
    where: { uid: req.params.uid },
  });
  res.json({
    ok: true,
    message: "query succesfull",
    data: posts,
  });
});

app.post("/user", async (req, res) => {
  console.log("user calling");
  const { name, email, photo, uid } = req.body;
  try {
    const exist = await prisma.user.findUnique({
      where: {
        uid: req.body.uid,
      },
    });
    if (exist) {
      return res.json({
        ok: true,
        message: "welcome back",
        data: exist,
      });
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        photo,
        uid,
        data: {},
      },
    });
    res.json({
      ok: true,
      message: "account was created",
      data: user,
    });
  } catch (e) {
    console.log(e);
  }
});

app.get("/user/:id", async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { uid: req.params.id },
  });
  res.json({
    ok: true,
    message: "account was created",
    data: user,
  });
});

const server = app.listen(3000);
