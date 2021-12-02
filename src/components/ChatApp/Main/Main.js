import ChatBoard from "./ChatBoard";
import ListUser from "./ListUser";
import { Flex } from "@chakra-ui/layout";

const Main = () => {

    return ( 
        <Flex justifyContent='center' p='3em'>
            <ChatBoard />
            <ListUser />
        </Flex>
     );
}
 
export default Main;