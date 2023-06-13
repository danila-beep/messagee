import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ChatsType, ChatType} from "../../types/chatsTypes";

const Chats = () => {

    const [chats, setChats] = useState<ChatsType>([])

    const fetchChats = async () => {
        const {data} = await axios.get("/api/chats")
        setChats(data)
    }

    useEffect(() => {
        fetchChats()
    }, [])

    return (
        <div>
            {chats.map((chat: ChatType) => {
                return (
                    <div key={chat.id}>
                        {chat.chatName}
                    </div>
                )
            })}
        </div>
    );
};

export default Chats;