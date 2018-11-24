import feathers from 'feathers'
import hooks from 'feathers-hooks'
import socketio from 'feathers-socketio'
import auth from 'feathers-authentication-client'
import io from 'socket.io-client'

const socket = io('https://api.blockhub.gg', { transports: ['websocket'] })

const feathersClient = feathers()
    .configure(hooks())
    .configure(socketio(socket))
    .configure(auth({ storage: window.localStorage }))

//feathersClient.service('/users')
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

export default feathersClient