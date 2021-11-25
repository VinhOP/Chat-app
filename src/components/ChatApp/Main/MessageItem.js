import { Flex,Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

const MessageItem = () => {
    
    const { userSelected }= useSelector((state) => state.user)
    const message = useSelector((state) => state.message)

    return ( 
        <>
        {(userSelected != null) && message.messages[userSelected.id].map((mes) => {
            return  <Flex key={mes.id}>
                    <Flex 
                    w='full'
                    flexDir='column'
                    >
                      <Flex alignSelf='center'>  <Text m='1em 0' color='gray.500'> {mes.createAt} </Text> </Flex>
                        <Flex 
                        alignSelf = {userSelected.id == mes.userID? 'flex-start' : 'flex-end'}
                        > 
                            <Text 
                            w='fit'
                            bg={userSelected.id == mes.userID? 'gray.200': 'blue.200'}
                            p='.5em 1em'
                            m='.5em 1em'
                            borderRadius={15}
                            > {mes.message} 
                            </Text> 
                        </Flex>
                    </Flex>
                </Flex>
        })}
        </>
     );
}

export default MessageItem;