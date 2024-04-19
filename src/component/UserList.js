//import { useState } from "react";
//import User from "./User";
import User from "./User";
import classes from "./UserList.module.css";
const UserList = (props) => {
    return(
    <table className={classes['user-list']}>
        <thead>
        <tr>
            <th>Todo Id</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
        </tr>
        </thead>
        {props.todos.map((todo)=>(
            <User
            key = {todo.id}
            todoId = {todo.id}
            title = {todo.title}
            status = {JSON.stringify(todo.completed) === 'true' ? "complete" : "incomplete"} 
            />
            ))}
    </table>
    )
}
export default UserList;