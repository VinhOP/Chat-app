import { setSelectedUser } from "../user/reducer";
import { addMessage } from "./reducer";


export const sendMessage = (message, myID) => {
    return (dispatch, getState) => {
        const {
            user: { userSelected },
        } = getState();
        
        dispatch(addMessage({
            userID: userSelected.id,
            message: message,
            myID: myID
        }))
    }
}

export const setDefaultSelectedUser = () => {
    return (dispatch, getState) => {
      const {
        user: { users }
      } = getState();
      dispatch(setSelectedUser(users['1']))
    };
  };