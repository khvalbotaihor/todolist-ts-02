import styles from "../style.module.css";
import React from "react";

type TaskType = {
    isDone: boolean,
    title: string
}

export function Task(props: TaskType) {
    const css = props.isDone && styles.done;

    return (
        <div className={`${styles.task} ${css}`} >
            <input type="checkbox" checked={props.isDone}/>
            <span>{props.title}</span>
        </div>
    )
}
