import { Injectable } from '@angular/core';

const Peer = require('peerjs');
const Web3 = require('web3');
const LifeRaft = require('liferaft')

declare let require: any;
declare let window: any;

let tokenAbi = require('./contracts/tokenContract.json');

let raft = null
let peer = null

// PEER JS

class PeerService {
  peer = null
  connectedPeers = {}
  peerId = null
  peerCallbacks = {}

  constructor() {

    // Connect to PeerJS, have server assign an ID instead of providing one
    // Showing off some of the configs available with PeerJS :).
    this.peer = new Peer({
      host: 'blockhub-peer-server.herokuapp.com',//'0.peerjs.com',
      port: 80,//9000,
      // Set API key for cloud server (you don't need this if you're running your
      // own.
      secure: false,
      // Set highest debug level (log everything!).
      debug: 3,
      allow_discovery: true,
      // Set a logging function:
      logFunction: function () {
        var copy = Array.prototype.slice.call(arguments).join(' ');
        console.log(copy)

        if (copy == 'ERROR Error: Lost connection to server.') {
          peer.reconnect();
        }
      }
    });

    // Show this peer's ID.
    this.peer.on('open', (id) => {
      console.log('[PeerService] Connected', id)

      //window.$('#pid').text(id);
      // this.peer.listAllPeers((peers) => {
      //   console.log(peers);
      // })
      //this.peerId = id

      //this.peer.send('hi all')
      // listAllPeers
    });


    // Handle a connection object.
    const connect = (c) => {
      console.log('[PeerService] New connection', c)

      // Handle a chat connection.
      if (c.label === 'chat') {
        const messages = []
        // var chatbox = window.$('<div></div>').addClass('connection').addClass('active').attr('id', c.peer);
        // var header = window.$('<h1></h1>').html('Chat with <strong>' + c.peer + '</strong>');
        // var messages = window.$('<div><em>Peer connected.</em></div>').addClass('messages');
        // chatbox.append(header);
        // chatbox.append(messages);

        // // Select connection handler.
        // chatbox.on('click', function () {
        //   if (window.$(this).attr('class').indexOf('active') === -1) {
        //     window.$(this).addClass('active');
        //   } else {
        //     window.$(this).removeClass('active');
        //   }
        // });

        // window.$('.filler').hide();
        // window.$('#connections').append(chatbox);
        c.on('data', function (data) {
          console.log('[PeerService] Received data', data)

          messages.push({ peer: c.peer, data: data })
          //messages.append('<div><span className="peer">' + c.peer + '</span>: ' + data + '</div>');

        });

        c.on('close', function () {
          //alert(c.peer + ' has left the chat.');
          // chatbox.remove();
          // if (window.$('.connection').length === 0) {
          //   window.$('.filler').show();
          // }
          delete this.connectedPeers[c.peer];
        });
      } else if (c.label === 'file') {
        c.on('data', function (data) {
          // If we're getting a file, create a URL for it.
          if (data.constructor === ArrayBuffer) {
            // var dataView = new Uint8Array(data);
            // var dataBlob = new Blob([dataView]);
            // var url = window.URL.createObjectURL(dataBlob);
            // window.$('#' + c.peer).find('.messages').append('<div><span className="file">' +
            //   c.peer + ' has sent you a <a target="_blank" href="' + url + '">file</a>.</span></div>');
          }
        });
      }

      this.connectedPeers[c.peer] = 1;

      var pp = this.peer.connect(c.peer, {
        label: 'chat',
        serialization: 'none',
        metadata: { message: 'hi i want to chat with you!' }
      });

      pp.on('open', function () {
        pp.open = true;

        var riftCallback = null;

        pp.on('call', function (call) {
          // Answer the call, providing our mediaStream
          call.answer('sssss');
        });

        pp.on('data', function (data) {
          console.log('[PeerService] Received response from request', data)

          if (riftCallback) {
            riftCallback(null, data);
          }
        })

        pp.on('close', function () {
          alert(c.peer + ' has left the chat.');

          delete this.connectedPeers[c.peer];

          raft.leave(c.peer)
        });

        raft.join(c.peer, function (data, cb) {
          console.log('[Rift] Writing to peer', c.peer, data)

          riftCallback = cb

          pp.call(data);
        });
      });

      pp.on('error', function (err) { alert(err); });
    }


    // Await connections from others
    this.peer.on('connection', connect);
    this.peer.on('error', (err) => {
      console.log('[PeerService] Error', err)
    })

    window.peerConnect = connect

    // window.$(document).ready(function () {
    //   // Connect to a peer
    //   window.$('#connect').click(function () {
    //     var requestedPeer = window.$('#rid').val();
    //     if (!this.connectedPeers[requestedPeer]) {
    //       // Create 2 connections, one labelled chat and another labelled file.
    //       var c = this.peer.connect(requestedPeer, {
    //         label: 'chat',
    //         serialization: 'none',
    //         metadata: { message: 'hi i want to chat with you!' }
    //       });

    //       c.on('open', function () {
    //         connect(c);
    //       });

    //       c.on('error', function (err) { alert(err); });

    //       var f = this.peer.connect(requestedPeer, { label: 'file', reliable: true });

    //       f.on('open', function () {
    //         connect(f);
    //       });

    //       f.on('error', function (err) { alert(err); });
    //     }

    //     this.connectedPeers[requestedPeer] = 1;
    //   });

    //   // Close a connection.
    //   window.$('#close').click(function () {
    //     eachActiveConnection(function (c) {
    //       c.close();
    //     });
    //   });

    //   // Send a chat message to all active connections.
    //   window.$('#send').submit(function (e) {
    //     e.preventDefault();

    //     // For each active connection, send the message.
    //     var msg = window.$('#text').val();

    //     eachActiveConnection(function (c, $c) {
    //       if (c.label === 'chat') {
    //         c.send(msg);
    //         $c.find('.messages').append('<div><span className="you">You: </span>' + msg + '</div>');
    //       }
    //     });

    //     window.$('#text').val('');
    //     window.$('#text').focus();
    //   });

      // // Goes through each active peer and calls FN on its connections.
      // function eachActiveConnection(fn) {
      //   var actives = window.$('.active');
      //   var checkedIds = {};
      //   actives.each(function () {
      //     var peerId = window.$(this).attr('id');
      //     if (!checkedIds[peerId]) {
      //       var conns = this.peer.connections[peerId];
      //       for (var i = 0, ii = conns.length; i < ii; i += 1) {
      //         var conn = conns[i];
      //         fn(conn, window.$(this));
      //       }
      //     }
      //     checkedIds[peerId] = 1;
      //   });
      // }

      // // Show browser version
      // //window.$('#browsers').text(navigator.userAgent);
    //});

    // Make sure things clean up properly.
    window.onunload = window.onbeforeunload = function (e) {
      if (!!this.peer && !this.peer.destroyed) {
        this.peer.destroy();
      }
    };
  }

  async sendRequest(method, args, cb) {
    console.log('[Raft] Sending request', method, args)


    // raft.quorum(5); // true
    // raft.quorum(2); // false

    // const dosomething = (fn) => {

    // };

    // raft.indefinitely((next) => {
    //   dosomething((err, res) => {
        
    //     return next(err, res);
    //   });
    // }, cb, 1000);
    const cmd = { name: 'Jimi', surname: 'Hendrix' };
    // const entry = await raft.log.saveCommand(cmd, raft.term);
    // const appendPacket = await raft.appendPacket(entry);
    raft.message(LifeRaft.FOLLOWER, cmd);

    raft.on('commit', function (command) {
      console.log(command.name, command.surname);
    });
  }

}

const peerService = new PeerService();

window.peerService = peerService

//////// LIFERAFT


raft = new LifeRaft('no address', {
  'election min': '50 millisecond',
  'election max': '1 second',
  'socket': null
});

///////

@Injectable()
export class ContractsService {
  private _account: string = null;
  private _web3: any;

  private _tokenContract: any;
  private _tokenContractAddress: string = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57";

  constructor() {
    if (typeof window.web3 !== 'undefined') {
      const provider = new window.web3.providers.HttpProvider("http://localhost:8545");
      // Use Mist/MetaMask's provider
      this._web3 = new Web3(provider); //window.web3.currentProvider);

      // if (this._web3.version !== "1.0.0-beta.34") {
      //   alert('Please connect to the Rinkeby network');
      // }
    } else {
      console.warn(
        'Please use a dapp browser like mist or MetaMask plugin for chrome'
      );
    }

    this._tokenContract = new this._web3.eth.Contract(tokenAbi.abi, this._tokenContractAddress) //this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
  }
  private async getAccount(): Promise<string> {
    if (this._account == null) {
      this._account = await new Promise((resolve, reject) => {
        this._web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            alert('There was an error fetching your accounts.');
            return;
          }

          if (accs.length === 0) {
            alert(
              'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
            );
            return;
          }
          resolve(accs[0]);
        })
      }) as string;

      this._web3.eth.defaultAccount = this._account;
    }

    return Promise.resolve(this._account);
  }

  public async getUserBalance(): Promise<number> {
    let account = await this.getAccount();

    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.methods.balanceOf(account).call({ gas: 3000000 }, (err, result) => {
        if (err != null) {
          reject(err);
        }

        resolve(this._web3.utils.fromWei(result));
      });
    }) as Promise<number>;
  }
}