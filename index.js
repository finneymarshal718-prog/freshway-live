require("dotenv").config();
const express = require("express");
const { Client, GatewayIntentBits } = require("discord.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Website
app.get("/", (req, res) => {
  res.send("<h1>Freshway PLC Logger is Live 🚀</h1>");
});

app.listen(PORT, () => {
  console.log("Website running on port " + PORT);
});

// Discord Bot
const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log("Bot is online!");
});

client.login(process.env.DISCORD_BOT_TOKEN);
