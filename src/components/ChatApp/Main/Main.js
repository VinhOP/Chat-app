import ChatBoard from "./ChatBoard";
import ListUser from "./ListUser";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import moment from "moment";
import { Flex } from "@chakra-ui/layout";
import { ChatAppContext } from "../../../contexts/ChatAppContext";

const Main = () => {

    const [userIndex, setUserIndex] = useState()

    return ( 
        <Flex justifyContent='center' p='3em'>
            <ChatAppContext.Provider value={{setUserIndex, userIndex}}>
                <ChatBoard />
                <ListUser />
            </ChatAppContext.Provider>
        </Flex>
     );
}
 
export default Main;