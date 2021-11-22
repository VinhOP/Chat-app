import EmojiPicker from "emoji-picker-react";
import { useState,useEffect, useRef, useContext } from "react"
import { Flex,Textarea,Button,Text } from "@chakra-ui/react";
import { AiFillSmile,AiFillLike } from "react-icons/ai";
import { ChatAppContext } from "../../../contexts/ChatAppContext";
import { useSelector,useDispatch } from "react-redux";
import { sendMessage } from "../../../features/users";


const InputControl = () => {

    //const { userIndex } = useContext(ChatAppContext)
    const userIndex = useSelector((state) => state.userIndex.value)

    const [inputData, setInputData] = useState([])
    const [myID, setMyID] = useState(1)
    const [showEmoList, setShowEmoList] = useState(false)

    const textareaRef = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        setInputData('')
    }, [userIndex])

    const onEmojiClick = (event, emojiObject) => {
        const {selectionStart , selectionEnd} = textareaRef.current
        const newValue = inputData.slice(0, selectionStart) + emojiObject.emoji + inputData.slice(selectionEnd)
        setInputData(newValue)
    }

    const handleChange = ((e) => {
        const { value } = e.target
        setInputData(value)
    })

    const handleSend = (() => {
        dispatch(sendMessage({
            userIndex: userIndex,
            mes: inputData,
            userID: myID,
        }))
        setInputData('')
    })

    const handleKeyPress= ((e) => {
        if(e.key === 'Enter') 
        {
            e.preventDefault();
            if(inputData) handleSend();
        }
     })
    
    const handleShowEmo =(() => {
        setShowEmoList(!showEmoList)
        textareaRef.current.focus()
    })

    return ( 
        <>
        {userIndex != null && <Flex mt='.5em' alignItems='center'>
                        <Button onClick={handleShowEmo}> <AiFillSmile /> </Button>
                        {showEmoList && <Flex>
                            <EmojiPicker disableSearchBar onEmojiClick={onEmojiClick}/>
                        </Flex>}
                   
                        
                        <Textarea
                        
                        rows = '1'
                        overflow = 'hidden'
                        resize = 'none'
                        borderColor = 'gray' 
                        wordBreak ='break-all' 
                        onChange = {handleChange}
                        onKeyPress = {handleKeyPress}
                        value = {inputData}
                        ref = {textareaRef}
                        />
                        

                        {inputData? 
                            <Button 
                            type='submit' 
                            m='0 .5em' 
                            bg='gray.300' 
                            borderRadius= {3} 
                            _focus= {{boxShadow: 'none'}} 
                            onClick={handleSend}> 
                                <Text> Send </Text> 
                            </Button> : 
                            <Button m='0 .5em' 
                            bg='gray.300' 
                            _focus= {{boxShadow: 'none'}}> 
                                <AiFillLike size='2em' />
                            </Button>}
                    </Flex>}
        </>
     );
}
 
export default InputControl;