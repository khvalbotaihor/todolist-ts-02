import React from "react";

type InputType = {
    placeholder: string
}


const Input = (props: InputType) => {
    return <input placeholder={props.placeholder}/>
}

export default Input;
