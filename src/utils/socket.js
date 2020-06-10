import io from "socket.io-client";
import { baseUrl } from "./intercepter";

let socket = null;

const setGlobalSocketConnection = (data) => {
    socket = data;
};

const connectionSocket = (uid = '') => {
    let options = { 'transports': ['websocket', 'polling'] };
    if(uid) {
        socket = io(`${baseUrl}/?id=${uid}`, options);
    } else {
        socket = io(`${baseUrl}/notifications`, options);
        console.log('socket', socket)
    }
};



export { connectionSocket, socket, setGlobalSocketConnection }

