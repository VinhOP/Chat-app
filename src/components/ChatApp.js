import { Flex,Box,Input,Button,Text,Textarea } from "@chakra-ui/react"
import { AiFillLike,AiFillCamera,AiFillSmile,AiOutlineFileGif } from 'react-icons/ai'
import { useState } from "react"

const icons = [<AiFillCamera size='2em'/>,<AiFillSmile size='2em' />, <AiOutlineFileGif size='2em' />]


const ChatApp = () => {

    const [inputData, setInputData] = useState()

    const handleChange = ((e) => {
        const {value} = e.target
        setInputData(value)
    })

    return ( 
        <>
        <Box bg='gray.100'>
            <Flex bg='blue.200' justifyContent='center'>
                <Text fontSize='2em' align='center' fontWeight='bold' > Chat App</Text>
            </Flex>
            <Flex justifyContent='space-between' p='3em'>
                        {/** --------------------- Chat Box --------------- */}
                <Flex flexDirection='column' justifyContent='center' w='full' mr='.5em' bg='white'>
                    <Flex h='30em' border='2px solid' borderColor='gray' borderRadius={7}> adsa </Flex>

                    <Flex mt='.1em' bg='white' >
                        {icons.map((icon) => {
                            return <Button 
                            _focus= {{boxShadow: 'none'}}
                            borderRadius= 'none'
                            >{icon}</Button>
                        })}

                        <Textarea
                        rows='1'
                        resize='none'
                        borderColor='gray'  
                        wordBreak='break-all' 
                        onChange = {handleChange}
                        value = {inputData}
                        />

                        {inputData? 
                            <Button _focus= {{boxShadow: 'none'}}> 
                                <Text fontSize='1.1em'> Send </Text> 
                            </Button> : 
                            <Button> <AiFillLike size='2em' /></Button>}                   
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