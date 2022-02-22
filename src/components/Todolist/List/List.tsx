import React from 'react';
import styles from './style.module.css';
import {Task} from "./Task/Task";
import {TaskType} from "../../../App";

type ListType = {
    tasks: TaskType[]
}

export function List(props: ListType) {
    return <div className={styles.list}>
        {
            props.tasks.map((el,index) => <Task isDone={el.isDone} title={el.title} key={el.id}/>)
        }
    </div>
}

