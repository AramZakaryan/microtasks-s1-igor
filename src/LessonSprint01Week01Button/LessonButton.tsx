import React, {MouseEvent} from "react";

export const LessonButton = () => {

    const onClickHandler = (name: string) => {
        console.log("Hello", name)
    }

    const foo1 =()=>{
        console.log("I am const", 200)
    }

    const foo2 =(num:number)=>{
        console.log("I am var", num)

    }
    return (<div>
        <button onClick={foo1}>1</button>
        <button onClick={()=>foo2(300)}>2</button>
        <br/>
        <br/>
        <button onClick={() =>
            onClickHandler("Vasya")
        }>MyYoutubeChanel-1
        </button>
        <button onClick={() =>
            onClickHandler("Ivan")
        }>MyYoutubeChanel-2
        </button>



    </div>)
}