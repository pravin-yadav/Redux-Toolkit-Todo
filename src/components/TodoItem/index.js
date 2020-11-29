import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../actions'

const TodoItem = (props) => {
    const { todos, handleEditTask } = props || {}
    const dispatch = useDispatch();

    const handleDeleteTask = (todo) => {
        dispatch(deleteTodo(todo))
    }    
    const todo = todos.map((todo, i) => 
                <div key={todo + '_' + i} className="card mt-2 mb-2 pointer">
                    <div className="card-body d-flex justify-content-between">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label" htmlFor="defaultCheck1"></label>
                        <span className="ml-3 task-text text-dark">{todo.task}</span>
                    </div> 
                   <div className="todo-icon">
                       <span onClick={() => handleEditTask(true, todo)} className="mx-4 text-secondary pointer" style={{fontSize: 24, cursor: 'pointer'}}>
                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                       </span>
                       <span onClick={() => handleDeleteTask(todo)} className="mx-2 text-danger pointer" style={{fontSize: 24, cursor: 'pointer'}}>
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                       </span>
                   </div>
                    </div>
                </div>
    )
        return(
            <React.Fragment>
               {todo}
            </React.Fragment>
        )
}

export default TodoItem;