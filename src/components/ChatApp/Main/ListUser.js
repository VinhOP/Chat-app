import { Flex,Button,Text } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { ChatAppContext } from "../../../contexts/ChatAppContext"
import { selectedUserSlice, updateSelectedUser } from '../../../features/selectedUser'

const ListUser = () => {

    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)
    const selectedUser = useSelector((state) => state.selectedUser.value)

    const handleSelectUser = (e) => {
        const {id} = e.currentTarget
        //setUserIndex(id)
        dispatch(updateSelectedUser(id))
    }

    return ( 
        <Flex w='20em' bg='white' flexDirection='column'>
                    {users.map(user => {
                        return <Button 
                                key= {user.id}
                                onClick={handleSelectUser} 
                                id = {user.id}
                                bg= {user.id == selectedUser? 'blue.500' : 'blue.200'}
                                
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