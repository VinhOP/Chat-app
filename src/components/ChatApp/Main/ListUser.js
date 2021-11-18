import { Flex,Button,Text } from "@chakra-ui/react"
import { useState } from "react"

const ListUser = ({users,setUserIndex}) => {

    const handleSelectUser = (e) => {
        const {id} = e.currentTarget
        setUserIndex(id)
    }

    return ( 
        <Flex w='20em' bg='white' flexDirection='column'>
                    {users.map(user => {
                        return <Button 
                                onClick={handleSelectUser} 
                                id = {user.id}
                                bg='blue.200' 
                                _focus={{boxShadow: 'none'}} 
                                p='2em' mb='1em' h='4em'
                                >
                                    <Text> {user.name}  </Text>
                                </Button>
                    })}
        </Flex>
     );
}
 
export default ListUser;