import { ADD_TODO, NEW_TODO, REMOVE_TODO } from '../types'

const initialState = {
  todos: ['Make Memes'],
  newTodo: ''
}

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload], newTodo: '' }
    case NEW_TODO:
      return { ...state, newTodo: action.payload }
    case REMOVE_TODO:
      state.todos.splice(action.payload, 1)
      return { ...state }
    default:
      return { ...state }
  }
}

export default TodoReducer
