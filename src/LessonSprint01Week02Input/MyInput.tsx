import React, {ChangeEvent} from 'react';

type MyInputPropsType = {
    setText: (text:string)=>void
    text:string
}

export const MyInput:React.FC<MyInputPropsType>= (props) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
         props.setText(event.currentTarget.value)
    }
    return (
        <>
            <input value={props.text} onChange={onChangeInputHandler}/>
        </>
    );
};
