const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'COMPLETE_TODO':
      return {
        if(state.id !== action.id) {
          return state;
        }
      }
  }
}
