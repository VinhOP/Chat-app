import { Flex,Button,Text } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { ChatAppContext } from "../../../contexts/ChatAppContext"

const ListUser = () => {

    const {users,setUserIndex} = useContext(ChatAppContext)

    const handleSelectUser = (e) => {
        const {id} = e.currentTarget
        setUserIndex(id)
    }

    return ( 
        <Flex w='20em' bg='white' flexDirection='column'>
                    {users.map((user,index) => {
                        return <Button 
                                key= {index}
                                onClick={handleSelectUser} 
                                id = {user.id}
                                bg='blue.200' 
                                _focus={{boxShadow: 'none'}} 
                                p='2em' 
                                mb='1em' 
                                h='4em'
                                >
                                    <Text> {user.name}  </Text>
                                </Button>
                    })}
        </Flex>
     );
}
 
export default ListUser;