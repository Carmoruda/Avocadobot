import tmi from "tmi.js";
import chalk from "chalk";

const client = new tmi.Client({
  connection: { reconnect: true },
  channels: ["channel_name"], // Replace with your channel name
});

client.connect();

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  const isAction = tags["message-type"] == "action";
  if (isAction) return;

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

  // "Username: Message"
  console.log(`${badges} ${nick}: ${message} ${type}`);
});
