import MessageItem from "./MessageItem";
import { Flex } from "@chakra-ui/react";
import { useEffect,useRef } from "react";
import { useContext } from "react/cjs/react.development";
import { ChatAppContext } from "../../../contexts/ChatAppContext";
import {useSelector} from 'react-redux'

const ListMessage = () => {

    const users = useSelector((state) => state.users)
    const ref = useRef(null)

    useEffect(() => {
        ref.current.scrollIntoView()
    },[users])

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