const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const Redis = require("ioredis");
const bodyParser = require("body-parser");

const redisCache = new Redis({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: Number(process.env.REDIS_PORT) || 6379,
});

const app = express();

app.use(bodyParser.json());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("setUserId", async (userId) => {
    await redisCache.set(userId, socket.id);
    console.log("Mapped user", userId, "to", socket.id);
  });

  socket.on("getConnectionId", async (userId) => {
    const connId = await redisCache.get(userId);
    console.log("Getting connection id for user", userId, connId);
    socket.emit("connectionId", connId);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.post("/sendPayload", async (req, res) => {
  const { userId, payload } = req.body;

  if (!userId || !payload) {
    return res.status(400).send("Bad request");
  }

  const socketId = await redisCache.get(userId);
  if (!socketId) {
    return res.status(404).send("User not connected");
  }

  io.to(socketId).emit("submissionPayloadResponse", {
    response: payload.response || payload,
  });

  return res.sendStatus(200);
});

const PORT = Number(process.env.PORT) || 3003;
httpServer.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
