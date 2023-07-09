import React from "react";

type BodyPropsType ={
    titleForBody: string
}


export const Body:React.FC<BodyPropsType> = (props) => {
    return (<div>
        {props.titleForBody}
    </div>)
}