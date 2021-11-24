import { Flex,Text,Button } from "@chakra-ui/react";
//import { Link } from "react-router-dom";

const Header = () => {
    return ( 
            <Flex bg='blue.200' justifyContent='center' alignItems='center'>
                <Flex />
                <Flex>
                    <Text fontSize='2em' align='center' fontWeight='bold' > Chat App</Text>
                </Flex>
            </Flex>
     );
}
 
export default Header;