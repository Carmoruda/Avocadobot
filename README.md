# Jellybot

![Build Status](https://img.shields.io/github/checks-status/carmoruda/jellybot/main)
[![BCH compliance](https://bettercodehub.com/edge/badge/Carmoruda/Jellybot?branch=main)](https://bettercodehub.com/)
![Languages](https://img.shields.io/github/languages/count/carmoruda/jellybot)
![Top Language](https://img.shields.io/github/languages/top/carmoruda/jellybot)
[![Total Downloads](https://img.shields.io/github/downloads/carmoruda/jellybot/total)](https://github.com/Carmoruda/jellybot/releases)
[![Version](https://img.shields.io/github/release/carmoruda/jellybot)](https://github.com/Carmoruda/jellybot/releases)
[![License](https://img.shields.io/github/license/carmoruda/jellybot)](https://github.com/Carmoruda/Jellybot/blob/main/LICENSE)
![Repo starts](https://img.shields.io/github/stars/carmoruda/jellybot?style=social)

Jellybot is a Twitch chatbot powered by Javascript. It is a simple chatbot that can be used to provide simple commands to Twitch users.

## Run the bot

1. Create a [Twitch](www.twitch.tv) account for the bot.

2. Create an application with the bot account using [Twitch dev console](https://dev.twitch.tv/login) (2FA is needed for this). Set the URL to "https://twitchtokengenerator.com".

3. Use the [token generator](https://twitchtokengenerator.com) to generate an Auth token.

4. Download the latests version of Jellybot from [GitHub](https://github.com/Carmoruda/jellybot/releases).

5. If you don't have it already installed, download the latest version of [Node.js](https://nodejs.org/en/download/current/) (v15.14.0 or newer is required.)

6. In your terminal or command prompt, navigate to the folder where Jellybot is located.

7. Install [tmi.js](https://www.npmjs.com/package/tmi.js) with the following command: `npm install -D tmi.js`

8. Install [chalk](https://www.npmjs.com/package/chalk) with the following command: `npm install -D chalk`

9. In the `index.js` file, replace `["channel_name"]` with the name of the channel you want the bot to log messages from.

10. To run the bot, use the following command: `node index.js`

## FAQ?

### How do I install / get Jellybot?

Head on over to the [release page](https://github.com/Carmoruda/jellybot/releases) and download the latest version.

### How to report a bug?

You may create a bug report on the [issues page](https://github.com/Carmoruda/jellybot/issues/new/choose)

### Where to share a new feature idea?

You may create a feature request on the [issues page](https://github.com/carmoruda/jellybot/issues/new/choose)

## Contributing

See [the contributing guide](CONTRIBUTING.md) for detailed instructions on how to get started with our project.

For quick fixes and more complex contributions, you can open an issue using the most appropiate [issue template](https://github.com/carmoruda/jellybot/issues/new/choose) to describe the changes you'd like to see.

If you're looking for a way to contribute, you can scan through our [existing issues](https://github.com/carmoruda/jellybot/issues) for something to work on. When ready, check out [Getting Started with Contributing](/CONTRIBUTING.md) for detailed instructions.

## License

This code (everything in this repository) is licensed under the GNU General Public License v3.0. With this meaning, you may use the code in this repository, modify it as you see fit, and distribute this code. However, if you were to release it, it must be under the same license, make it open source, and provide documentation of the changes. All versions must have copyright credit pointing back to this source.

Anything using this code must be under the GNU Public License, and a copyright credit must point back here.
