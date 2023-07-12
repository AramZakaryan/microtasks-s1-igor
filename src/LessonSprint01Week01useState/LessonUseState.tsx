import React, {useState} from "react";

export const LessonState =() => {
    // let a = 1
    let [a,setA] = useState(1)
    const onClickHandler = () => {
        setA(++a)
    }

    const onClickHandlerZero =()=> {
        setA(0)
    }
return(
    <div>
        <h1>{a}</h1>
        <button onClick={onClickHandler}>number</button>
        <button onClick={onClickHandlerZero}>0</button>

    </div>

)
}