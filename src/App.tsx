import styles from './App.module.css';
import {Todolist} from './components/Todolist/Todolist';
import React from 'react';
import {v1} from "uuid";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

function App() {

    const tasks1: TaskType[] = [
        {id: v1(), title: 'CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: false},
        {id: v1(), title: 'React', isDone: true},
    ]
    const tasks2: TaskType[] = [
        {id: v1(), title: 'Bicycle', isDone: false},
        {id: v1(), title: 'Bread', isDone: true},
        {id: v1(), title: 'Car', isDone: true},
    ]
    const tasks3: TaskType[] = [
        {id: v1(), title: 'Anger', isDone: true},
        {id: v1(), title: 'Satisfaction', isDone: true},
        {id: v1(), title: 'Blind', isDone: false},
    ]


    return (
        <div className={styles.App}>
            <Todolist tasks={tasks1} title="What to learn"/>
            <Todolist tasks={tasks2} title="What to buy"/>
            <Todolist tasks={tasks3} title="What to forget"/>
        </div>
    );
}

export default App;
