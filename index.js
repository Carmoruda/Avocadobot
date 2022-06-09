import tmi from "tmi.js";

const client = new tmi.Client({
  connection: { reconnect: true },
  channels: ["carmenchu83"], // Replace with your channel namee
});

client.connect();

client.on("message", (channel, tags, message, self) => {
  // "Username: Message"
  console.log(`${tags["display-name"]}: ${message}`);
});
