<div align="center">
  <br>

  <a href="https://hyperbridge.org/"><img src="https://hyperbridge.org/img/blockhub-logotype-color.svg" width="400" alt="logo"></a>

  <br>
  <br>

  [![Gitter chat](https://img.shields.io/gitter/room/TechnologyAdvice/Stardust.svg)](https://gitter.im/Hyperbridge/Lobby) [![license](https://img.shields.io/hexpm/l/plug.svg)](https://github.com/hyperbridge/blockhub-web-client/blob/master/LICENSE.md)

</div>

<br>

This is the monorepo for BlockHub.

## Quick Links

- 🌐 [Site - Production](https://blockhub.gg/)
- 📺 [Site - Preview](https://preview.blockhub.gg/)
- 📺 [Site - Beta](https://beta.blockhub.gg/)
- 📺 [Site - Staging](https://staging.blockhub.gg/)
- 📖 [Docs](http://docs.hyperbridge.org/blockhub)
- 📓 [EIPs](https://github.com/hyperbridge/EIPs)
- 💻 [Web Client](https://github.com/hyperbridge/blockhub-web-client)
- 💻 [Desktop Client](https://github.com/hyperbridge/blockhub-desktop-client)
- 🛡 [Node Operator](https://github.com/hyperbridge/blockhub-node-operator)
- 🔗 [Protocol](https://github.com/hyperbridge/protocol)


### Clients

[clients/desktop](Desktop Client) - Standard BlockHub experience for desktop users. Wraps the Web Client. Built with Electron.


### SDKs

[sdks/csharp](C#) - Supports basic BlockHub interactions. Built with .NET.
C++ - Coming soon
JS - Coming soon


### Services

[services/web](Web) - Web Service provides API for BlockHub protocols. Built with Node + Express + Swagger.
[services/gateway](Gateway) - Gateway for other API services. Currently sits in front of the Web Service. Built with Express Gateway + Swagger.
[services/veriff](Veriff) - Webhook for Veriff verification callbacks. Adds people to the Mailchimp mailing list. Built with Express.


### Packages

[packages/chrome-extension](Chrome Extension) - Chrome extension for BlockHub.
[packages/chrome-bridge](Chrome Bridge) - Native messaging proxy for Google Chrome to communicate with BlockHub.
[packages/web-connector](Web Connector) - One-liner integration for websites. Utilizes the BlockHub JS API to provide a standard UI popups.
[packages/node-operator](Node Operator) - Connects peers to fuel and facilitate network actions. Built with Node + Express + libp2p + IPFS.


## License

[Apache License 2.0](LICENSE.md)

## Problems?

Discuss Node Operator on our Gitter:
https://gitter.im/Hyperbridge/Lobby

Please post any bugs as Github issues.