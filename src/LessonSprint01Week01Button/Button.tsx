import React from "react";

type ButtonPropsType = {
    name: string
    callback: () => void
}


export const Button: React.FC<ButtonPropsType> = (props) => {
    // const onClickHandler = () => {
    //   props.callback() /*Step 03*/
    // }
    return (<div>
        {/*<button onClick={onClickHandler}>{props.name}</button> /!*Step 04*!/*/}
        <button onClick={()=>props.callback()}>{props.name}</button> {/*Step 04*/}
    </div>)
}