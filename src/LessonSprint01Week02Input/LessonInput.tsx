import React, {useState} from "react";
import {FullInput} from "./FullInput";
import {MyInput} from "./MyInput";
import {MyButton} from "./MyButton";

export const LessonInput = () => {

    let [messages, setMessages] = useState([
        {message: "Message1"},
        {message: "Message2"},
        {message: "Message3"},
    ])

    // Version of FullInput
    // const addMessage = (argument:string) => {
    //     setMessages([{message: argument},...messages])
    // }

    // Version of separate Impute and separate Button
    const addMessage = () => {
        setMessages([{message: text},...messages])
        setText("")
    }
    let [text, setText] =useState("")
    // console.log(text)

    return (
        <div>
            {/*Version of FullInput*/}
            {/*<FullInput addMessage={addMessage}/>*/}

            {/*Version of separate Impute and separate Button*/}
            <MyInput text={text} setText={setText}/>
            <MyButton addMessage={addMessage}/>


            {messages.map((el,ind)=><p key={ind}>{el.message}</p>)}
        </div>
    )
}