import React, {useState} from "react";
import {FullInput} from "./FullInput";

export const LessonInput = () => {

    let [messages, setMessages] = useState([
        {message: "Message1"},
        {message: "Message2"},
        {message: "Message3"},
    ])

    const addMessage = (argument:string) => {
        setMessages([{message: argument},...messages])
    }


    return (
        <div>
            <FullInput addMessage={addMessage}/>
            {messages.map((el,ind)=><p key={ind}>{el.message}</p>)}
        </div>
    )
}