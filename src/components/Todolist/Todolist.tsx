import Header from './Header/Header';
import {List} from './List/List';
import {Footer} from './Footer/Footer';
import React from 'react';
import styles from './style.module.css';

export const Todolist = () => {
    return <div className={styles.todolist}>
        <Header/>
        <List/>
        <Footer/>
    </div>
}
