import React from "react";

type InputType = {
    placeholder: string
}


const Input = (props: InputType) => {
    return <input placeholder={props.placeholder} type="text" value="blabla"/>
}

export default Input;
