import React from "react";
import styles from './style.module.css';
import cn from 'classnames';

type ButtonType = {
    text: string
    type?: "default"|"info"|"danger"|"success"
}

const Button = (props: ButtonType) => {
/*    let css = styles.button;
    if (!props.type || props.type === 'default'){
        css=''
    }
    if (props.type === 'danger'){
        css = styles.danger
    }
    if (props.type === 'info'){
        css = styles.info
    }
    if (props.type === 'success'){
        css = styles.success
    }*/
    const css = cn({
        [styles.button]: true,
        [styles.danger]: props.type ==="danger",
        [styles.success]: props.type ==="success",
        [styles.info]: props.type ==="info",
    })

    return <input type="button" value={props.text} className={`${styles.button} ${css}`}/>
}

export default Button;
