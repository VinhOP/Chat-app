import { useState,useEffect, useRef, useContext } from "react"
import { Flex,Textarea,Button,Text } from "@chakra-ui/react";
import { AiFillSmile,AiFillLike } from "react-icons/ai";
import { useSelector,useDispatch } from "react-redux";
import InputEmoji from "react-input-emoji";
import { addMessage } from "../../../store/message/reducer";

const InputControl = () => {

    const selectedUser = useSelector((state) => state.user.userSelected)
    const [inputData, setInputData] = useState()
    const [myID, setMyID] = useState(0)
    const dispatch = useDispatch()

    const handleSend = (() => {
        dispatch(addMessage({
            message: inputData,
            userID: selectedUser.id,
            myID: myID
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