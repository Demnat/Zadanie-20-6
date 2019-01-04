import Todo from './Todo.js';
import style from './TodoList.css';

const TodoList = props => {
    const list = props.datal.map((data) => <Todo text={data.text} id={data.id} key={data.id} remove={props.remove.bind(this)} />);

    return (
        <ul className={style.dataList} id={'todoList'}>
            {list}
        </ul>
    );
}

export default TodoList;