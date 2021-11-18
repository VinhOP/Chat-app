import MessageItem from "./MessageItem";
import { Flex } from "@chakra-ui/react";
import { useContext, useEffect,useRef } from "react";
import { ChatAppContext } from "../../../contexts/ChatAppContext";

const ListMessage = ({userIndex}) => {

    const {users, user} = useContext(ChatAppContext)
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
            <MessageItem user={user} userIndex={userIndex}/>
            <div ref={ref} />
        </Flex>
     );
}
 
export default ListMessage;