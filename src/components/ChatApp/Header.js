import { Flex,Text,Button } from "@chakra-ui/react";
//import { Link } from "react-router-dom";

const Header = () => {
    return ( 
            <Flex bg='blue.200' justifyContent='space-between' alignItems='center'>
                <Flex />
                <Flex>
                    <Text fontSize='2em' align='center' fontWeight='bold' justifyContent='center' > Chat App</Text>
                </Flex>
            </Flex>
     );
}
 
export default Header;