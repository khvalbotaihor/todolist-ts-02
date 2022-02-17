import Header from './Header/Header';
import {List} from './List/List';
import {Footer} from './Footer/Footer';
import React from 'react';
import styles from './style.module.css';
import {TaskType} from "../../App";

type TodolistType = {
    tasks: TaskType[]
    title:string
}

export const Todolist = (props: TodolistType) => {
    return <div className={styles.todolist}>
        <Header title={props.title}/>
        <List tasks={props.tasks}/>
        <Footer/>
    </div>
}
