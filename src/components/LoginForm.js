import { Input,FormControl,FormLabel,FormHelperText,Flex,Text,Center,Box,Button} from "@chakra-ui/react";

const forms = ['User Name' , 'Password']
const LoginForm = () => {
    return (
        <Center bg='gray.600' p='6em'>
            <Flex boxSize='30em' bg='white'>
                <FormControl bg='white.500' p='2em'>
                    <Text fontSize='2.5em' align='center' fontWeight='bold' mb='1em'>Log In</Text>
                    {forms.map((form) => {
                        return <Box m='1em 0'>
                                    <FormLabel> {form}</FormLabel> 
                                    <Input borderColor='gray'/>
                                </Box>
                    })}
                    <Center>
                        <Button borderColor='gray' type='submit' w='20%' mt='1em'> Log in</Button>
                    </Center>
                </FormControl>
            </Flex>
        </Center>
     )
}
 
export default LoginForm;