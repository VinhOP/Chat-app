import InputControl from "./InputControl";
import ListMessage from "./ListMessage";
import { Flex } from "@chakra-ui/layout";

const ChatBoard = ({users,user,setUsers,userIndex,setUserIndex}) => {
    return ( 
        <Flex flexDir='column' justifyContent='center' mr='.5em' bg='white' h='30em'>
            <ListMessage users={users} user={user} setUserIndex={setUserIndex} userIndex={userIndex}/>
            <InputControl users={users} user={user} userIndex={userIndex} setUsers={setUsers}/>
        </Flex>
     );
}
 
export default ChatBoard;