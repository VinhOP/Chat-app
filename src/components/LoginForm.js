import { Input,FormControl,FormLabel,FormHelperText,Flex,Text,Center,Box,Button} from "@chakra-ui/react";

const form = ['User Name' , 'Password']
const LoginForm = () => {
    return (
        <Center p='6em' bgRepeat='no-repeat' bgSize='cover' bgImg='https://i.pinimg.com/564x/6f/63/e9/6f63e9361712ddb1c9b1a03cead9eb5d.jpg'>
            <Flex boxSize='30em' bg='white'>
                <FormControl bg='white.500' p='2em'>
                    <Text fontSize='2.5em' align='center' fontWeight='bold' mb='1em'>Log In</Text>
                        <FormLabel> User name </FormLabel>
                        <Input />
                        <FormLabel> Password </FormLabel>
                    <Center>
                        <Button bg='gray.300' borderColor='gray' type='submit' w='20%' mt='1em'> Log in</Button>
                    </Center>
                </FormControl>
            </Flex>
        </Center>
     )
}
 
export default LoginForm;