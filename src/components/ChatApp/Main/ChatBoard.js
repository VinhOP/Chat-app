import InputControl from "./InputControl";
import ListMessage from "./ListMessage";
import { Flex } from "@chakra-ui/layout";
import { ChatAppContext } from "../../../contexts/ChatAppContext";
import { useContext } from "react";

const ChatBoard = ({setUsers,setUserIndex}) => {

    const { users, user, userIndex } = useContext(ChatAppContext)

    return ( 
        <Flex flexDir='column' justifyContent='center' mr='.5em' bg='white' h='30em'>
            <ListMessage userIndex={userIndex}/>
            <InputControl userIndex={userIndex} setUsers={setUsers}/>
        </Flex>
     );
}
 
export default ChatBoard;