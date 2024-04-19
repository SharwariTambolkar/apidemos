import classes from "./User.module.css"

const User = (props) => {

    return(
        <tbody>
            <tr className={classes.user}>
                <td>{props.todoId}</td>
                <td>{props.title}</td>
                <td>{props.status}</td>
                <td><button>View Users</button></td>
            </tr>
        </tbody>
    )
}
export default User;