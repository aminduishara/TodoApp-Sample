import './Todo.css'

function Todo({ todo, statuschange }) {

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="todo__name">{todo.name}</div>
            <div className="todo__status" onClick={() => statuschange(todo.id)}>{todo.status == 1 ? 'completed' : 'pending'}</div>
        </div>
    )
}

export default Todo