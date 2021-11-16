import { Flex,Box,Input,Button,Text,Textarea,FormControl,Center } from "@chakra-ui/react"
import { AiFillLike,AiFillCamera,AiFillSmile,AiOutlineFileGif } from 'react-icons/ai'
import { useState,useEffect } from "react"
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'
import moment, { Moment } from "moment";

const icons = [<AiFillCamera size='2em'/>,<AiFillSmile size='2em' />, <AiOutlineFileGif size='2em' />]
const ChatApp = () => {
    
    const [inputData, setInputData] = useState()
    const [userIndex, setUserIndex] = useState()
    const [myID, setMyID] = useState(1)
    //const [userID, setUserID] = useState(uuidv4)

    const [users, setUsers] = useState([
        {
            id: 2,
            name: 'Nam',
            messages: [{
                id: uuidv4,
                mes: 'OK con de',
                createAt: moment(new Date()).format("dddd, h:mm:ss a"),
                userID: 2,
            }]
        },
        {
            id: 3,
            name: 'Hoang',
            messages: [
                {
                    id: uuidv4,
                    mes: 'hello AAASSS',
                    createAt:  moment(new Date()).format("dddd, h:mm:ss a"),
                    userID: 3,
                }
            ]
        },
        {
            id: 4,
            name: 'Tuyet',
            messages: [
                {
                    id: uuidv4,
                    mes: 'TESTINGGGGGG',
                    createAt:  moment(new Date()).format("dddd, h:mm:ss a"),
                    userID: 4,
                }
            ]
        }
    ])

    const handleChange = ((e) => {
        const { value } = e.target
        setInputData(value)
    })

    const handleSend = (() => {
        const message = {
            id: uuidv4,
            mes: inputData,
            createAt: moment(new Date()).format("dddd, h:mm:ss a"),
            userID: myID,
        }
        users[userIndex].messages = [...users[userIndex].messages, message]
        setUsers([...users])
        setInputData('')
        console.log(users)
    })

    const handleSelectUser = ((user, index) => {
        setUserIndex(index)
    })

    const handleKeyPress= ((e) => {
       if(e.key === 'Enter') 
       {
           e.preventDefault();
           if(inputData) handleSend();
       }
    })

    return ( 
        <>
        <Box bg='gray.100'>
            <Flex bg='blue.200' justifyContent='space-between' alignItems='center'>
                <Flex />
                <Flex>
                    <Text fontSize='2em' align='center' fontWeight='bold' > Chat App</Text>
                </Flex>
                <Flex>
                    <Link to='/login'> 
                        <Button m=' 0 .5em'>Log in</Button> 
                    </Link>
                </Flex>
            </Flex>
            
            
            <Flex justifyContent='space-between' p='3em'>

                        {/** --------------------- Chat Box --------------- */}
                <Flex flexDirection='column' justifyContent='center' w='full' mr='.5em' bg='white'>
                    <Flex flexDirection='column'
                    h='30em'
                    border='2px solid' 
                    borderColor='gray'
                    justifyContent='flex-end'
                    >
                        {(userIndex != null && users[userIndex].messages.length > 0) && users[userIndex].messages.map(mes => {
                            return <Flex> 
                                    {users[userIndex].id == mes.userID? <Flex w='full' justifyContent='flex-start'>
                                        <Text 
                                        bg='gray.300'
                                        p='.5em 1em'
                                        m='.5em 1em'
                                        borderRadius={15}
                                        > {mes.mes} </Text> <Text m='1em 0' color='gray.500'> {mes.createAt} </Text>
                                    </Flex>: 
                                    <Flex w='full' justifyContent='flex-end'>
                                        <Text m='1em 0' color='gray.500'> {mes.createAt} </Text>
                                        <Text 
                                        bg='blue.300'
                                        p='.5em 1em'
                                        m='.5em 1em'
                                        borderRadius={15}
                                        > {mes.mes} </Text> 
                                    </Flex>}
                                </Flex>
                        })}
                    </Flex>
                    {userIndex != null && <Flex mt='.5em' alignItems='center'>
                        {icons.map((icon) => {
                            return <Button
                            _focus= {{boxShadow: 'none'}}
                            borderRadius= 'none'
                            >{icon}</Button>
                        })}
                        
                        <Textarea
                        rows = '1'
                        overflow = 'hidden'
                        resize = 'none'
                        borderColor = 'gray' 
                        wordBreak ='break-all' 
                        onChange = {handleChange}
                        onKeyPress = {handleKeyPress}
                        value = {inputData}
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
                            
                </Flex>
                        {/** ------------------------------------------------------ */}
                <Flex w='20em' bg='white' flexDirection='column'>
                    {users.map((user, index) => {
                        return <Button 
                        onClick={() => handleSelectUser(user, index)} 
                        bg='blue.200' 
                        _focus={{boxShadow: 'none'}} 
                        p='2em' mb='1em' h='4em'>
                                    <Text> {user.name} </Text>
                                </Button>
                    })}
                </Flex>
            </Flex>
        </Box>
        </>
     )
}
 
export default ChatApp;