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

// Events
client.on("disconnected", (reason) => { onDisconnectedHandler(reason) }); // TODO Disconnected Handler function
client.on("connected", (reason) => { onConnectedHandler(reason) }); // TODO Connected Handler function

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
    if (command === "!test") {
      client.say(channel, "This is a test answer");
    }

    else if (command === "!dice") {
      console.log("Dice petition received");
      const number = Math.floor(Math.random() * 6) + 1;
      client.say(channel, `${displayName} the number ${number} has been rolled `);
    }

    else if (command === "!magic") {
      const number = Math.floor(Math.random() * 3);
      const position = message.indexOf(" ") + 1;
      const question = message.substring(position);
      const answers = [
        "✔️ of course",
        "❌ no way",
        "❔ maybe, who know..."
      ];
      client.say(channel, `${displayName}, the answer to "${question}" is ${answers[number]}`);
    }
  }

  // "Badge Username: Message"
  console.log(`${badges} ${nick}: ${message} => ¿Is it a command? ${isCommand}`);
});

// Events handlers
function onDisconnectedHandler(reason) {
  console.log(`Disconnected: ${reason}`);
}

function onConnectedHandler(reason) {
  console.log(`Connected: ${reason}`);
}
