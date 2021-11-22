import { Flex,Button,Text } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { ChatAppContext } from "../../../contexts/ChatAppContext"
import userIndex, { update } from '../../../features/userIndex'

const ListUser = () => {

    const dispatch = useDispatch()
    //const { setUserIndex } = useContext(ChatAppContext)
    const users = useSelector((state) => state.users)

    const handleSelectUser = (e) => {
        const {id} = e.currentTarget
        //setUserIndex(id)
        dispatch(update(id))
    }

    return ( 
        <Flex w='20em' bg='white' flexDirection='column'>
                    {users.map(user => {
                        return <Button 
                                key= {user.id}
                                onClick={handleSelectUser} 
                                id = {user.id}
                                bg='blue.200' 
                                _focus={{boxShadow: 'none'}} 
                                p='2em' 
                                mb='1em' 
                                h='4em'
                                >
                                    <Text> {user.name} </Text>
                                </Button>
                    })}
        </Flex>
     );
}
 
export default ListUser;