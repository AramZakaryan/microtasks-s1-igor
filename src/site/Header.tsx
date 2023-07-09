import React from "react";

type HeaderPropsType = {
    title:string
}
export const Header:React.FC<HeaderPropsType> = (props) => {
    return (<div>
        {props.title}
    </div>)
}