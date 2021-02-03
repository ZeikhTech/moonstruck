// import {ServerContainer} from '@react-navigation/native';
// import {socketServer} from '../../config';
// import {configureChat} from './chat';
// // import {configureNotifications} from './notifications';

// class SocketIO {
//   //   ws = new WebSocket();
//   _id = '';
//   initialize = (userId) => {
//     this.ws = new WebSocket(socketServer);

//     if (userId) this._id = userId;
//     if (!this.ws) {
//       this.ws(socketServer);

//       this.ws.onopen = () => {
//         console.log('socket connection established');

//         const userData = {
//           sId: userId,
//           command: 'save',
//         };
//         this.ws.send(JSON.stringify(userData));

//         configureChat(this.ws);
//         // configureNotifications(this.ws);
//       };

//       this.ws.onclose = (e) => {
//         console.log(e.code, e.reason);
//         // this.ws = null;
//         // this.initialize();
//       };
//     }
//     return this.ws;
//   };

//   getSocket = () => {
//     return this.ws || this.initialize(this._id);
//   };
// }

// const socketIO = new SocketIO();

// export default socketIO;
