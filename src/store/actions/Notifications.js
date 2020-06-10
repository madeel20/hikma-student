import {socket} from "../../utils/socket";
import {openNotification, aud} from "../../utils/helper";

export const connectNotificationsChannel = (id) =>  {
    socket.on(`${id}`, (response => {
        if(response){
            aud.play();
            openNotification(response.title, response.message)
        }
    }))
};
