import tmi from "tmi.js";
import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config();

const client = new tmi.Client({
  connection: { reconnect: true },
  channels: ["channel_name"], // Replace with your channel name
  identity: {
    username: process.env.TWITCH_BOT_USERNAME,
    password: process.env.TWITCH_OAUTH_TOKEN // https://twitchapps.com/tmi/
  },
});

client.connect();

client.on("message", (channel, tags, message, self) => {
  const username = tags.username;
  const displayName = tags["display-name"];
  const color = tags?.color ?? "#ffffff";
  const nick = chalk.hex(color).underline(username);
  const mod = tags?.mod;
  const type = tags["message-type"];
  const isChat = tags["message-type"] == "chat";
  const isPrime = tags?.badges?.premium ?? false;
  const isVip = tags?.badges?.vip ?? false;
  const isMod = tags?.badges?.moderator ?? false;
  const isSub = tags?.subscriber;
  const badges =
    (isPrime ? "👑" : "") +
    (isVip ? "💎" : "") +
    (isSub ? "💾" : "") +
    (isMod ? "⚔️" : "");

  if (self) return;

  const isAction = tags["message-type"] == "action";
  if (isAction) return;

  const isCommand = message.startsWith("!"); // Default prefix "!"
  if (isCommand) {
    const command = message.split(" ")[0].toLowerCase();
    if (command == "!test") {
      client.say(channel, "This is a test answer");
    }
    return
  }

  // "Badge Username: Message"
  console.log(`${badges} ${nick}: ${message} => ¿Es un comando? ${isCommand}`);
});
