import React from "react";

type FooterPropsType = {
    titleForFooter:string
}

export const Footer:React.FC<FooterPropsType> =(props) => {
    return (<div>
        {props.titleForFooter}
    </div>)
}