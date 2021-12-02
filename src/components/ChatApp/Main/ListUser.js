import { Flex,Button,Text } from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from "../../../store/user/reducer"
const ListUser = () => {

    const { users, userSelected } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleSelectUser = (e) => {
        const {id} = e.currentTarget
        dispatch(setSelectedUser({id: id}))
    }
    
    return (
        <Flex w='20em' bg='white' flexDirection='column'>
                    {Object.values(users).map(user => {
                        return <Button
                                key = {user.id}
                                onClick={handleSelectUser} 
                                id = {user.id}
                                bg= {userSelected && userSelected.id == user.id? 'blue.500' : 'blue.200'}
                                
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