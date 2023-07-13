import React, {FC} from 'react';

type MyButtonPropsType = {
    buttonCallback: ()=>void

}
export const MyButton :React.FC<MyButtonPropsType>= (props) => {

    const onClickButtonHandler = () => {
        props.buttonCallback()
        // setText("")
    }
    return (
        <>
            <button onClick={onClickButtonHandler}>+</button>
        </>
    );
};
