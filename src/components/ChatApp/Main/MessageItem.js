import { Flex,Text } from "@chakra-ui/react";

const MessageItem = ({user,userIndex}) => {
console.log(userIndex)
console.log(user)
    return ( 
        <>
        {(userIndex != null && user.messages.length > 0) && user.messages.map(mes => {
            return  <Flex>
                    <Flex 
                    w='full'
                    flexDir='column'
                    >
                      <Flex alignSelf='center'>  <Text m='1em 0' color='gray.500'> {mes.createAt} </Text> </Flex>
                        <Flex 
                        alignSelf = {user.id == mes.userID? 'flex-start' : 'flex-end' }
                        > 
                            <Text 
                            w='fit'
                            bg={user.id == mes.userID? 'gray.200': 'blue.200'}
                            p='.5em 1em'
                            m='.5em 1em'
                            borderRadius={15}
                            > {mes.mes} 
                            </Text> 
                        </Flex>
                    </Flex>
                </Flex>
        })}
        </>
     );
}
 
export default MessageItem;