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
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log("Bot is online!");
});
const prefix = "!";

client.on("messageCreate", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    message.reply("Pong! 🏓");
  }
});
client.login(process.env.DISCORD_BOT_TOKEN);
