import React from "react";
import styles from './style.module.css';

type ButtonType = {
    text: string
}

const Button = (props: ButtonType) => {
    return <input type="button" value={props.text} className={styles.button}/>
}

export default Button;
