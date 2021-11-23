
import { useState,useEffect, useRef, useContext } from "react"
import { Flex,Textarea,Button,Text } from "@chakra-ui/react";
import { AiFillSmile,AiFillLike } from "react-icons/ai";
import { ChatAppContext } from "../../../contexts/ChatAppContext";
import { useSelector,useDispatch } from "react-redux";
import { sendMessage } from "../../../features/users";
import InputEmoji from "react-input-emoji"

const InputControl = () => {

    //const { userIndex } = useContext(ChatAppContext)
    const userIndex = useSelector((state) => state.userIndex.value)

    const [inputData, setInputData] = useState([])
    const [myID, setMyID] = useState(1)
    const [showEmoList, setShowEmoList] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        setInputData('')
    }, [userIndex])

    const handleSend = (() => {
        dispatch(sendMessage({
            userIndex: userIndex,
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
        {userIndex != null && <Flex mt='.5em' alignItems='center'>
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