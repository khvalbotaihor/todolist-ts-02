import React from 'react';
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";

function Header() {
    return <div className="todoList-header">
        <h3 className="todoList-header__title">What to Learn</h3>
        <div className="todoList-newTaskForm">
            <Input placeholder="New Title" />
            <Button text="Add" />
        </div>
    </div>
}

export default Header
