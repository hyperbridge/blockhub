import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'


const getCookie = (name) => {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

const setCookie = (variable, value, expires_seconds) => {
  var d = new Date();
  d = new Date(d.getTime() + 1000 * expires_seconds);
  document.cookie = variable + '=' + value + '; expires=' + d.toGMTString() + ';';
}

setCookie('WEB_SERVICE_URL', 'http://localhost:9001')

const socket = io(getCookie('WEB_SERVICE_URL') || 'https://api.blockhub.gg', { transports: ['websocket'] }) // https://api.blockhub.gg // http://localhost:9001

const feathersClient = feathers()
    //.configure(hooks())
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