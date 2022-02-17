import styles from "../style.module.css";
import React from "react";

type TaskType = {
    isDone: boolean,
    title: string
}

export function Task(props: TaskType) {
    return (
        <div className={styles.task}>
            <input type="checkbox" checked={props.isDone}/>
            <span>{props.title}</span>
        </div>
    )
}
