import { Flex,Box,Input,Button,Text,Textarea,FormControl,Center } from "@chakra-ui/react"
import { AiFillLike,AiFillCamera,AiFillSmile,AiOutlineFileGif } from 'react-icons/ai'
import { useState,useEffect } from "react"
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'
import moment, { Moment } from "moment";
import EmojiPicker from "emoji-picker-react";

const icons = [<AiFillCamera size='2em' />,<AiFillSmile size='2em' />, <AiOutlineFileGif size='2em' />]
const ChatApp = () => {
    
    const [inputData, setInputData] = useState([])
    const [userIndex, setUserIndex] = useState()
    const [myID, setMyID] = useState(1)
    const [showEmoList, setShowEmoList] = useState(false)

    const [chosenEmoji, setChosenEmoji] = useState([]);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
        console.log(chosenEmoji)
    }

    useEffect(() => {
        //setInputData([...inputData, chosenEmoji.emoji])
    },[chosenEmoji])

    useEffect(() => {
        console.log(userIndex)
    },[userIndex])

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
    
    const user = users.find(user => user.id == userIndex)
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
        user.messages = [...user.messages, message]
        setUsers([...users])
        setInputData('')
        console.log(users)
    })

    const handleSelectUser = (e) => {
        const {id} = e.currentTarget
        setUserIndex(id)
    }

    const handleKeyPress= ((e) => {
       if(e.key === 'Enter') 
       {
           e.preventDefault();
           if(inputData) handleSend();
       }
    })

    const handleClick = ((icon, index) => {
        switch(index){
            case 0:
                break;
            case 1:
                
                console.log('a')
                break;
        }
    })

    const handleShowEmo =(() => {
        setShowEmoList(!showEmoList)
    })

    return ( 
        <>
        <Flex bg='gray.100' justifyContent='center' flexDir='column'>
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
            
            
            <Flex justifyContent='center' p='3em'>

                        {/** --------------------- Chat Box --------------- */}
                <Flex flexDir='column' justifyContent='center' mr='.5em' bg='white' h='30em'>
                    <Flex 
                    h='30em'
                    w='60em'
                    border='2px solid' 
                    borderColor='gray'
                    flexDirection='column'
                    overflowY='scroll'

                    >
                        {(userIndex != null && user.messages.length > 0) && user.messages.map(mes => {
                            return  <Flex>
                                    <Flex 
                                    w='full'
                                    flexDir='column'
                                    >
                                      <Flex alignSelf='center'>  <Text m='1em 0' color='gray.500'> {mes.createAt} </Text> </Flex>
                                        <Flex 
                                        alignSelf = {user.id == mes.userID? 'flex-start' : 'flex-end' }
                                        > 
                                            <Text 
                                            w='fit'
                                            bg={user.id == mes.userID? 'gray.200': 'blue.200'}
                                            p='.5em 1em'
                                            m='.5em 1em'
                                            borderRadius={15}
                                            > {mes.mes} 
                                            </Text> 
                                        </Flex>
                                    </Flex>
                                </Flex>
                        })}
                    </Flex>
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
                    {users.map(user => {
                        return <Button 
                                onClick={handleSelectUser} 
                                id = {user.id}
                                bg='blue.200' 
                                _focus={{boxShadow: 'none'}} 
                                p='2em' mb='1em' h='4em'
                                
                                >
                                    <Text> {user.name}  </Text>
                                </Button>
                    })}
                </Flex>
            </Flex>
        </Flex>
        </>
     )
}
 
export default ChatApp;