import React from "react";

export type ChatType = {
    isGroupChat: boolean,
    users: {
        name: string,
        email: string
    }[],
    id: string,
    chatName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
}

export type ChatsType = ChatType[]