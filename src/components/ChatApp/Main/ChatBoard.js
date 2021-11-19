import InputControl from "./InputControl";
import ListMessage from "./ListMessage";
import { Flex } from "@chakra-ui/layout";

const ChatBoard = () => {
    return ( 
        <Flex flexDir='column' justifyContent='center' mr='.5em' bg='white' h='30em'>
            <ListMessage />
            <InputControl />
        </Flex>
     );
}
 
export default ChatBoard;