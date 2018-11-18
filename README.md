<div align="center">
  <br>

  <a href="https://hyperbridge.org/"><img src="https://hyperbridge.org/img/blockhub-logotype-color.svg" width="400" alt="logo"></a>

  <br>
  <br>

  [![Gitter chat](https://img.shields.io/gitter/room/TechnologyAdvice/Stardust.svg)](https://gitter.im/Hyperbridge/Lobby) [![license](https://img.shields.io/hexpm/l/plug.svg)](https://github.com/hyperbridge/blockhub-web-client/blob/master/LICENSE.md)

  <h1><code>Desktop Client</code> for BlockHub</h1>
</div>

<br>

This is the desktop client for BlockHub, built with Electron.

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


## Getting Started

To clone and run this repository you'll need Git and Node.js (which comes with NPM) installed on your computer. We recommend using Node Package Manager (NVM): 

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

Install Node 8.11.1: 

```bash
nvm install 8.11.1
```

If you get `nvm: command not found`, simply close your current terminal, open a new terminal, and try again. Please see the [NVM readme](https://github.com/creationix/nvm) if you have any issues.

```bash
# Clone this repository
git clone https://github.com/hyperbridge/blockhub-desktop-client
# Go into the main repo
cd blockhub-desktop-client
# Install deps
npm install
# Navigate to app
cd app
# Run the app in electron
npm run dev
```


You'll also need to install [Ganache](https://github.com/trufflesuite/ganache/releases)

Change the `Port Number` to `8545`



Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## License

[Apache License 2.0](LICENSE.md)

## Problems?

Discuss Node Operator on our Gitter:
https://gitter.im/Hyperbridge/Lobby

Please post any bugs as Github issues.