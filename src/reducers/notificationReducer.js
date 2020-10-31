const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'VOTE_NOTIFICATION':
      return `you vote '${action.data.anecdote}'`
    case 'CREATE_NOTIFICATION':
      return `you create '${action.data.anecdote}'`
    case 'CLEAR_NOTIFICATION':
      return ''
    default:
      return state
  }
}

export const createNotification = (anecdote) => {
  return {
    type: 'CREATE_NOTIFICATION',
    data: { anecdote }
  }
}

export const voteNotification = (anecdote) => {
  return {
    type: 'VOTE_NOTIFICATION',
    data: { anecdote }
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION',
    data: {}
  }
}

export default notificationReducer
