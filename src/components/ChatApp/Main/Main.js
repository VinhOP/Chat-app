import ChatBoard from "./ChatBoard";
import ListUser from "./ListUser";
import { v4 as uuidv4 } from 'uuid'
import moment, { Moment } from "moment";
import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/layout";


const Main = () => {

    const [userIndex, setUserIndex] = useState()

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

    return ( 
        <Flex justifyContent='center' p='3em'>
            <ChatBoard users={users} user={user} setUsers={setUsers} userIndex={userIndex} setUserIndex={setUserIndex}/>
            <ListUser users={users} setUserIndex={setUserIndex}/>
        </Flex>
     );
}
 
export default Main;