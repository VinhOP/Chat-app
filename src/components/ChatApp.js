import { Flex,Box,Input,Button,Text,Textarea } from "@chakra-ui/react"
import { AiFillLike,AiFillCamera,AiFillSmile,AiOutlineFileGif } from 'react-icons/ai'
import { useState,useEffect } from "react"

const icons = [<AiFillCamera size='2em'/>,<AiFillSmile size='2em' />, <AiOutlineFileGif size='2em' />]


const ChatApp = () => {

    const [inputData, setInputData] = useState()
    const [messages, setMessages] = useState([])

    const handleChange = ((e) => {
        const {value} = e.target
        setInputData(value)
    })

    const handleSend = (() => {
        setMessages([...messages, inputData])
        setInputData('')
    })

    const handleKeyPress= ((e) => {
       if(e.key === 'Enter') 
       {
           e.preventDefault();
           if(inputData) handleSend();
       }
    })

    useEffect(() => {
        console.log(messages)
    }, [messages])
    return ( 
        <>
        <Box bg='gray.100'>
            <Flex bg='blue.200' justifyContent='center'>
                <Text fontSize='2em' align='center' fontWeight='bold' > Chat App</Text>
            </Flex>
            <Flex justifyContent='space-between' p='3em'>

                        {/** --------------------- Chat Box --------------- */}
                <Flex flexDirection='column' justifyContent='center' w='full' mr='.5em' bg='white'>
                    <Flex flexDirection='column'
                    justifyContent='flex-end'
                    alignItems='flex-end'
                    h='30em' 
                    border='2px solid' 
                    borderColor='gray' 
                    borderRadius={7}>
                        {messages && messages.map((mess) => {
                           return   <Flex bg='blue.200' borderRadius={18} p='.5em 1em' m='.6em'>
                                        <Text> {mess}</Text> 
                                    </Flex>
                        })}
                    </Flex>
                    <Flex mt='.5em' alignItems='center'>
                        {icons.map((icon) => {
                            return <Button
                            _focus= {{boxShadow: 'none'}}
                            borderRadius= 'none'
                            >{icon}</Button>
                        })}

                        <Textarea
                        rows='1'
                        overflow='hidden'
                        resize='none'
                        borderColor='gray' 
                        wordBreak='break-all' 
                        onChange = {handleChange}
                        onKeyPress={handleKeyPress}
                        value = {inputData}
                        />

                        {inputData? 
                            <Button m='0 .5em' bg='gray.300' borderRadius= {3} _focus= {{boxShadow: 'none'}} onClick={handleSend}> 
                                <Text> Send </Text> 
                            </Button> : 
                            <Button m='0 .5em' bg='gray.300' _focus= {{boxShadow: 'none'}}> <AiFillLike size='2em' /></Button>}                   
                    </Flex>
                
                </Flex>
                        {/** ------------------------------------------------------ */}
                <Flex w='20em' bg='white'>
                    list
                </Flex>
            </Flex>
        </Box>
        </>
     )
}
 
export default ChatApp;