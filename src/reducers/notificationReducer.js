const notificationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_NOTIFICATION':
      if (state) {
        clearTimeout(state.timeoutID)
      }
      return {
        info: `you vote '${action.data.content}'`,
        timeoutID: action.data.timeoutID
      }
    case 'CLEAR_NOTIFICATION':
      return {}
    default:
      return state
  }
}

export const setNotification = (content, time) => {
  return async (dispatch) => {
    const timeoutID = setTimeout(() => {
      dispatch({
        type: 'CLEAR_NOTIFICATION',
        data: ''
      })
    }, time)

    dispatch({
      type: 'NEW_NOTIFICATION',
      data: { content, timeoutID }
    })
  }
}

export const createNotification = (content) => {
  console.log('notification content:', content)
  return async (dispatch) => {
    dispatch({
      type: 'CREATE_NOTIFICATION',
      data: content
    })
  }
}

export const voteNotification = (anecdote) => {
  return {
    type: 'VOTE_NOTIFICATION',
    data: anecdote
  }
}

export default notificationReducer
