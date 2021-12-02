import { Flex,Text,Button, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage } from "../../../store/message/action";

import { selectedUser } from "../../../store/user/selector";

const MessageItem = () => {

    const [mesSelected, setMesSelected] = useState()
    const [showList, setShowList] = useState(false)
    const { userSelected,myID } = useSelector((state) => state.user)
    const message = useSelector(selectedUser)

    const dispatch = useDispatch()
    const showMoreIcon = ((mes) => {
        if((mesSelected == mes.id) && !mes.deleted && (mes.userID == myID)) {
            return 'true'
        }
        return 'none'
    })

    const showMoreList = ((mes) => {
        if(mesSelected == mes.id) setShowList(!showList)
    })

    const handleOnMouseLeave = () => {
        setMesSelected()
        setShowList(false)
    }

    return ( 
        <>
        {(userSelected != null) && message.map((mes) => {
            return  <Flex key={mes.id}>
                    <Flex 
                    w='full'
                    flexDir='column'
                    >
                      <Flex alignSelf='center'>  <Text m='1em 0' color='gray.500'> {mes.createAt} </Text> </Flex>
                        <Flex 
                        alignSelf = {userSelected.id == mes.userID? 'flex-start' : 'flex-end'}
                        flexDir=  {userSelected.id == mes.userID? 'row-reverse' : 'row'}
                        m = '1em'
                        onMouseEnter={() => setMesSelected(mes.id)}
                        onMouseLeave={handleOnMouseLeave}
                        >
                            <Flex flexDir='column' w='4em' alignItems='center'>
                                <IconButton
                                icon = {<AiOutlineMore size='1.5em'/>}
                                w = '1em'
                                d={() => showMoreIcon(mes)}
                                bg={showList? 'gray.100' : 'none'}
                                _focus={{boxShadow: 'none'}}
                                onClick={() => showMoreList(mes)}
                                />

                                {(mesSelected == mes.id && showList) && 
                                <Button 
                                onClick={() => dispatch(deleteMessage(mes.id))}
                                > delete 
                                </Button>}
                            </Flex>
                            
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