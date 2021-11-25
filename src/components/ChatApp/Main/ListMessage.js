import MessageItem from "./MessageItem";
import { Flex } from "@chakra-ui/react";
import { useEffect,useRef } from "react";
import {useSelector} from 'react-redux'

const ListMessage = () => {

    const { message }= useSelector((state) => state)
    const { userSelected } = useSelector((state) => state.user)
    const ref = useRef(null)

    useEffect(() => {
        ref.current.scrollIntoView()
    },[message, userSelected])

    return ( 
        <Flex 
        h='30em'
        w='60em'
        border='2px solid' 
        borderColor='gray'
        flexDirection='column'
        overflowY='scroll'
        >
            <MessageItem />
            <div ref={ref} />
        </Flex>
     );
}
 
export default ListMessage;