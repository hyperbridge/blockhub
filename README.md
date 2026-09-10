<div align="center">
  <br>

  <a href="https://hyperbridge.org/"><img src="https://hyperbridge.org/img/blockhub-logotype-color.svg" width="400" alt="logo"></a>

  <br>
  <br>

  [![Discord](https://discordapp.com/api/guilds/458332417909063682/widget.png)](https://discord.gg/w6Awrxq) [![license](https://img.shields.io/hexpm/l/plug.svg)](https://github.com/hyperbridge/blockhub/blob/master/LICENSE.md) [![](https://img.shields.io/badge/whitepaper-v2.0.0-lightgrey.svg)](https://hyperbridge.org/whitepaper) [![Gitter chat](https://img.shields.io/gitter/room/Hyperbridge/Lobby.svg)](https://gitter.im/Hyperbridge/Lobby) [![](https://img.shields.io/badge/telegram-group-blue.svg)](https://t.me/hyperbridgechat) [![](https://img.shields.io/badge/discord-server-brightgreen.svg)](https://discord.gg/w6Awrxq) [![](https://img.shields.io/badge/twitter-%40hyperbridge-blue.svg)](https://twitter.com/@hyperbridge) [![](https://img.shields.io/badge/e--mail-hello%40hyperbridge.org-brightgreen.svg)](mailto:hello@hyperbridge.org) [![Greenkeeper badge](https://badges.greenkeeper.io/hyperbridge/blockhub.svg)](https://greenkeeper.io/)

</div>

<br>

This is the monorepo for BlockHub.

## GitHub Pages UI demo

The `github-pages-demo` branch restores the Vue 2 storefront from `master` for a
static demo at `https://contextlimit.github.io/blockhub/`. The dedicated build
uses six original games, 14 items, five collections, five profiles, three realms,
crowdfunding, messages, offers, and bundled artwork through an in-memory Feathers
adapter. The route directory at `#/sitemap` exposes the original screens. Signup
creates a tab-local demo session and Download previews the platform chooser;
payments, actual installers, publishing, and backend writes remain unavailable.

With Node 24.14.1 and Google Chrome installed:

```sh
cd clients/web/demo
npm ci
npm run build
npm test
npm run preview
```

The preview opens at `http://127.0.0.1:43117/blockhub/`. Set `CHROME_PATH` for a
Chrome executable outside the default macOS location. `npm test` starts and
stops its own Nuxt preview and headless Chrome, checks the storefront, game
details, catalog, collections, signup, downloads, search, refresh behavior, image
loading and absence of external requests, then sweeps every included demo route.
It saves screenshots and structured results under `.tmp/pages-proof`.

GitHub Pages must use **GitHub Actions** as its publishing source. The workflow
builds and verifies pushes to `github-pages-demo`, then deploys `dist-pages`.
Hash routes preserve navigation and refreshes under the repository subpath.
The seed source and artwork identities are recorded in
`clients/web/demo/artwork-manifest.json` and `clients/web/demo/recovery-manifest.json`.
The latter records the original Git seed revision and the additional artwork
from the recovered Portal UI. `node recover-fixtures.mjs /path/to/portal` in the
demo directory rebuilds those sanitized seed fixtures and copies the pinned
Portal Git objects. Runtime demo data contains no private keys or login secrets.

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

Join BlockHub on Discord:
https://discord.gg/w6Awrxq

Please post any bugs as Github issues.
