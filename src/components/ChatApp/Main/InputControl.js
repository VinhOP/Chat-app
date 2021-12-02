import { useState,useEffect } from "react";
import { Flex,Button,Text } from "@chakra-ui/react";
import { AiFillLike } from "react-icons/ai";
import { useSelector,useDispatch } from "react-redux";
import InputEmoji from "react-input-emoji";
import { sendMessage, setDefaultSelectedUser } from "../../../store/message/action";

const InputControl = () => {

    const { userSelected, myID } = useSelector((state) => state.user)
    const [inputData, setInputData] = useState()
    const dispatch = useDispatch()

    const handleSend = (() => {
        dispatch(sendMessage(inputData, myID))
        setInputData('')
    })
    
    useEffect(() => {
        dispatch(setDefaultSelectedUser())
    },[dispatch])

    const handleEnter = ((e) => {
        inputData && handleSend();
    })

    return ( 
        <>
        {userSelected != null && <Flex mt='.5em' alignItems='center'>
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