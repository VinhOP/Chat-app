const Header = () => {
    return ( 
            <Flex bg='blue.200' justifyContent='space-between' alignItems='center'>
                <Flex />
                <Flex>
                    <Text fontSize='2em' align='center' fontWeight='bold' > Chat App</Text>
                </Flex>
                <Flex>
                    <Link to='/login'> 
                        <Button m=' 0 .5em'>Log in</Button> 
                    </Link>
                </Flex>
            </Flex>
     );
}
 
export default Header;