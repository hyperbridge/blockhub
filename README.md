<div align="center">
  <br>

  <a href="https://hyperbridge.org/"><img src="https://hyperbridge.org/img/blockhub-logotype-color.svg" width="400" alt="logo"></a>

  <br>
  <br>

  [![Discord][discord-shield]][discord] ![build](https://travis-ci.org/hyperbridge/blockhub.svg?branch=master) [![license](https://img.shields.io/hexpm/l/plug.svg)](https://github.com/hyperbridge/blockhub/blob/master/LICENSE.md) [![](https://img.shields.io/badge/whitepaper-v2.0.0-lightgrey.svg)](https://hyperbridge.org/whitepaper) [![Gitter chat](https://img.shields.io/gitter/room/Hyperbridge/Lobby.svg)](https://gitter.im/Hyperbridge/Lobby) [![](https://img.shields.io/badge/telegram-group-blue.svg)](https://t.me/hyperbridgechat) [![](https://img.shields.io/badge/discord-server-brightgreen.svg)](https://discord.gg/w6Awrxq) [![](https://img.shields.io/badge/twitter-%40hyperbridge-blue.svg)](https://twitter.com/@hyperbridge) [![](https://img.shields.io/badge/e--mail-hello%40hyperbridge.org-brightgreen.svg)](mailto:hello@hyperbridge.org) [![Greenkeeper badge](https://badges.greenkeeper.io/hyperbridge/blockhub.svg)](https://greenkeeper.io/)

</div>

<br>

This is the monorepo for BlockHub.

## Quick Links

- 🌐 [Site - Production](https://blockhub.gg/)
- 🌐 [Site - Preview](https://preview.blockhub.gg/)
- 🌐 [Site - Beta](https://beta.blockhub.gg/)
- 🌐 [Site - Staging](https://staging.blockhub.gg/)
- 📖 [Docs](http://docs.hyperbridge.org/blockhub)
- 📓 [EIPs](https://github.com/hyperbridge/EIPs)
- 🔗 [Protocol](https://github.com/hyperbridge/protocol)


## Intro

The BlockHub project is broken up into related categories:

* SDKs - in the `sdks` dir
* Clients - in the `clients` dir
* Services - in the `services` dir
* Tools - in the `tools` dir
* Packages - in the `packages` dir (these are basically ones that don't fit into the above categories)


### Clients

| Name | Path |  |
| --- | --- | --- |
| **Web Client** | [clients/web](clients/web) | Standard BlockHub experience for web users. Built with *Vue* and *Nuxt*. |
| **Desktop Client** | [clients/desktop](clients/desktop) | Standard BlockHub experience for desktop users. Wraps the Web Client. Built with Electron. |

### SDKs

| Name | Path |  |
| --- | --- | --- |
| **C#** | [sdks/csharp](sdks/csharp) | Supports basic BlockHub interactions. Built with .NET. |
| **JS** | [sdks/js](sdks/js) | Supports basic BlockHub interactions. Built with TypeScript.

### Services

| Name | Path |  |
| --- | --- | --- |
| **Web** | [services/web](services/web) | Web Service provides API for BlockHub protocols. Built with Node + Express + Feathers + Swagger. |
| **Mail** | [services/mail](services/mail) | Mail Service for other API services.  Built with Express + Swagger Connect. |
| **Gateway** | [services/gateway](services/gateway) | Gateway for other API services. Currently sits in front of the Web Service. Built with Express Gateway + Swagger. |
| **Veriff** | [services/veriff](services/veriff) | Webhook for Veriff verification callbacks. Adds people to the Mailchimp mailing list. Built with Express. |

### Packages

| Name | Path |  |
| --- | --- | --- |
| **Chrome Extension** | [packages/chrome-extension](packages/chrome-extension) | Chrome extension for BlockHub. |
| **Chrome Bridge** | [packages/chrome-bridge](packages/chrome-bridge) | Native messaging proxy for Google Chrome to communicate with BlockHub. |
| **Web Connector** | [packages/web-connector](packages/web-connector) | One-liner integration for websites. Utilizes the BlockHub JS API to provide a standard UI popups. |
| **Node Operator** | [packages/node-operator](packages/node-operator) | Connects peers to fuel and facilitate network actions. Built with Node + Express + libp2p + IPFS. |


### Tools

| Name | Path |  |
| --- | --- | --- |
| **DevTools** | [tools/devtools](tools/devtools) | Developer Tools for BlockHub. Built with *Electron*. |
| **Styleguide** | [tools/styleguide](tools/styleguide) | Styleguide for BlockHub. Built with *Storybook*. |
| **Test Runner** | [tools/test-runner](tools/test-runner) | Test Runner for BlockHub. Built with *Selenium* and *Nightwatch*. |


## Contribution

See [CONTRIBUTING](CONTRIBUTING.md)


## License

[Apache License 2.0](LICENSE.md)


## Problems?

Discuss Funding Protocol on our Gitter:
https://gitter.im/Hyperbridge/Lobby

Please post any bugs as Github issues.

[discord-shield]: https://discordapp.com/api/guilds/458332417909063682/widget.png
[discord]: https://discord.gg/w6Awrxq
