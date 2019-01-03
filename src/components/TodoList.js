import Todo from './Todo.js';

const TodoList = props => {
    const list = props.datal.map((data) => <Todo text={data.text} key={data.id} onClick={props.remove(data.id)} />)

    return (
        <ul className={'dataList'} id={'todoList'}>
            {list}
        </ul>
    );
}

export default TodoList;