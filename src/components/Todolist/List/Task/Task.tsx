import styles from "../style.module.css";
import React from "react";
import cn from 'classnames'

type TaskType = {
    isDone: boolean,
    title: string
}

export function Task(props: TaskType) {
/*
    const css = props.isDone && styles.done;
*/
    const css = cn({
        [styles.task]: true,
        [styles.done] : props.isDone
    })

    return (
        <div className={css} >
            <input type="checkbox" checked={props.isDone}/>
            <span>{props.title}</span>
        </div>
    )
}
