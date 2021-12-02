import { Box, Flex } from "@chakra-ui/layout";
import Header from "./Header";
import Main from "./Main/Main";

const ChatApp = () => {
    
    return (
        <Flex justifyContent='center'>
            <Box>
                <Header />
                <Main />
            </Box>
        </Flex> 
     );
}
 
export default ChatApp;