import { connect } from 'react-redux'
import {
  AddTodo,
  RemoveTodo,
  CreateNewTodo
} from '../store/actions/TodoActions'
import TodoForm from './TodoForm'

const TodoList = (props) => {
  const handleChange = (e) => props.createTodo(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTodo(props.todoState.newTodo)
  }

  return (
    <div>
      <TodoForm
        newTodo={props.todoState.newTodo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {props.todoState.todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => props.removeTodo(index)}>remove</button>
        </li>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todoState: state.todoState
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    addTodo: (newTodo) => dispatch(AddTodo(newTodo)),
    removeTodo: (index) => dispatch(RemoveTodo(index)),
    createTodo: (formValue) => dispatch(CreateNewTodo(formValue))
  }
}

export default connect(mapStateToProps, mapActionsToProps)(TodoList)
