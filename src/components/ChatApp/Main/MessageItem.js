import { Flex,Text,Button, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage } from "../../../store/message/action";

import { selectedUser } from "../../../store/user/selector";

const MessageItem = () => {

    const [mesSelected, setMesSelected] = useState()
    
    const { userSelected,myID } = useSelector((state) => state.user)
    const [showList, setShowList] = useState(false)
    const message = useSelector(selectedUser)

    const dispatch = useDispatch()

    const handleMouseLeave = () => {
        setMesSelected()
        setShowList(false)
    }

    return ( 
        <>
        {(userSelected != null) && message.map((mes) => {
            return  <Flex key={mes.id} onMouseLeave={handleMouseLeave}>
                    <Flex 
                    w='full'
                    flexDir='column'
                    >
                      <Flex alignSelf='center'>  <Text m='1em 0' color='gray.500'> {mes.createAt} </Text> </Flex>
                        <Flex 
                        justifyContent = {userSelected.id == mes.userID? 'flex-start' : 'flex-end'}
                        m = '1em'
                        pos='relative'
                        onMouseEnter={() => setMesSelected(mes.id)}
                        
                        >
                            {((mes.userID == myID) && (mesSelected == mes.id) && !mes.deleted) && 
                            <Flex flexDir='column-reverse' w='4em' alignItems='center'>
                                <IconButton
                                icon = {<AiOutlineMore size='1.5em'/>}
                                w = '1em'
                                bg={showList? 'gray.100' : 'none'}
                                _focus={{boxShadow: 'none'}}
                                onClick={() => setShowList(!showList)}
                                />

                                {showList && 
                                <Button 
                                zIndex={1}
                                pos='absolute'
                                bottom='2.7em'
                                onClick={() => dispatch(deleteMessage(mes.id))}
                                > delete 
                                </Button>}
                            </Flex>}
                            
                            <Text
                            boxSize='fit-content'
                            maxW='20em'
                            bg={userSelected.id == mes.userID? 'gray.200': (mes.deleted? 'none' : 'blue.200')}
                            border={mes.deleted? '1px solid' : 'none'}
                            fontStyle={mes.deleted? 'italic' : 'none'}
                            color={mes.deleted? 'gray.500' : 'none'}
                            p='.5em 1em'
                            borderRadius={15}
                            > {mes.deleted? 'Tin nhắn đã được thu hồi': mes.message} 
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
        })}
        </>
     );
}

export default MessageItem;