import { useState,useEffect, useRef, useContext } from "react"
import { Flex,Textarea,Button,Text } from "@chakra-ui/react";
import { AiFillSmile,AiFillLike } from "react-icons/ai";
import { ChatAppContext } from "../../../contexts/ChatAppContext";
import { useSelector,useDispatch } from "react-redux";
import { storeMessage } from "../../../features/message";
import InputEmoji from "react-input-emoji"
import { sendMessage } from "../../../features/users";

const InputControl = () => {

    const selectedUser = useSelector((state) => state.selectedUser.value)
    const message = useSelector((state) => state.message.value)
    const user = useSelector((state) => state.user.value)

    const [inputData, setInputData] = useState([])
    const [myID, setMyID] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        setInputData('')
    }, [selectedUser])

    useEffect(() => {
        message && dispatch(sendMessage({
            selectedUser: selectedUser,
            message: message,
        }))
        console.log(message)
        
    }, [message])

    const handleSend = (() => {
        dispatch(storeMessage({
            selectedUser: selectedUser,
            mes: inputData,
            userID: myID,
        }))
        setInputData('')
    })
    
    const handleEnter = ((e) => {
        inputData && handleSend();
    })
    return ( 
        <>
        {selectedUser != null && <Flex mt='.5em' alignItems='center'>
                        <Flex w='55em'>
                            <InputEmoji
                            onChange = {setInputData}
                            onEnter = {handleEnter}
                            value = {inputData}
                            />
                        </Flex>
                        
                        {inputData?
                            <Button 
                            type='submit' 
                            m='0 .5em' 
                            bg='gray.300' 
                            borderRadius= {3} 
                            _focus= {{boxShadow: 'none'}} 
                            onClick= {handleSend}
                            > 
                                <Text> Send </Text> 
                            </Button> : 
                            <Button 
                            m='0 .5em' 
                            bg='gray.300' 
                            _focus= {{boxShadow: 'none'}}
                            > 
                                <AiFillLike size='2em' />
                            </Button>}
                    </Flex>}
        </>
     );
}
 
export default InputControl;