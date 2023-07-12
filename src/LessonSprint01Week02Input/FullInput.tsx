import React, {ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction, useState} from 'react';

type FullInputPropsType= {
    addMessage: (text: string)=>void
}



export const FullInput:React.FC<FullInputPropsType> = (props) => {
    let [text, setText] =useState("")
    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setText( event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(text)
        setText("")

    }
    return (
        <div>
            <input value={text} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
            {}
        </div>
    );
};
