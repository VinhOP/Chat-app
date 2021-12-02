import { Flex,Text,Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
            <Flex bg='blue.200' justifyContent='space-between' alignItems='center' p='.5em 0'>
                <Flex />
                <Flex>
                    <Text fontSize='2em' align='center' fontWeight='bold' > Chat App</Text>
                </Flex>
                <Flex>
                   <Link to='/login' target='_blank'> <Button mr='2em'> Login </Button> </Link>
                </Flex>
            </Flex>
     );
}
 
export default Header;