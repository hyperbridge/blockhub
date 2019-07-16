import axios from 'axios'
import feathers from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'
import { CookieStorage } from 'cookie-storage'
import Cookie from 'cookie-universal'

let client = null

if (process.client) {
    const cookies = Cookie()

    if (window.location.hostname === 'localhost' || window.location.hostname === 'blockhub.gg.local') {
        cookies.set('WEB_SERVICE_URL', 'http://localhost:9001')
    }

    client = (serviceUrl, storage) => {
        if (!serviceUrl) serviceUrl = cookies.get('WEB_SERVICE_URL') || 'https://api.blockhub.gg'
        if (!storage) storage = new CookieStorage()

        const socket = io(serviceUrl, { transports: ['websocket'] })

        return feathers()
            .configure(rest(serviceUrl).axios(axios))
            // .configure(socketio(socket, { timeout: 15000 }))
            .configure(auth({ storage }))
    }
} else {
    client = (serviceUrl, storage) => {
        const socket = io(serviceUrl)

        return feathers()
            .configure(rest(serviceUrl).axios(axios))
            // .configure(socketio(socket, { timeout: 15000 }))
            .configure(auth({ storage }))
    }
}

export default client


// BELOW IS USAGE CODE, FOR REFERENCE

// feathersClient.service('/users')
/* .configure(feathersVuex(store, {
  idField: '_id',
  auth: {
    userService: '/users'
  }
})) */

// feathersClient.service('/users')
// feathersClient.service('/messages')
// feathersClient.service('/todos').vuex({idField: '_id'})
// feathersClient.service('/deeply/nested/names')
// feathersClient.service('/some/explicit/namespace').vuex({name: '/explicit/namespace'})

// var socket = io();

// socket.emit('todos::find', {}, function (error, todos) { create remove patch
//   console.log('Found todos', todos);
// });

// socket.on('todos created', function (todo) { patched removed
//   console.log('Someone created a new Todo');
// });

// var newTodo = {
//   text: 'My Socket todo',
//   complete: false
// };

// socket.emit('todos::create', newTodo, {}, function (error, todo) {
//   console.log('I successfully created a Todo', todo);
// });

// services.messageService.on('created', message => this.addMessage(message))
