import React, {FC} from 'react';

type MyButtonPropsType = {
    addMessage: ()=>void

}
export const MyButton :React.FC<MyButtonPropsType>= (props) => {

    const onClickButtonHandler = () => {
        props.addMessage()
        // setText("")
    }
    return (
        <>
            <button onClick={onClickButtonHandler}>+</button>
        </>
    );
};
