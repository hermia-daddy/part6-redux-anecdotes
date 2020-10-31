import anecdoteServices from '../services/anecdotes'

export const voteOf = (updateAnecdote) => {
  return async (dispatch) => {
    const changedAnecdote = await anecdoteServices.updateAnecdote({
      ...updateAnecdote,
      votes: updateAnecdote.votes + 1
    })
    dispatch({
      type: 'VOTE',
      data: changedAnecdote
    })
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteServices.createAnecdote(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteServices.getAll()
    dispatch({
      type: 'INIT_ANECDOTE',
      data: anecdotes
    })
  }
}

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    case 'VOTE':
      const id = action.data.id
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : action.data
      )
    case 'INIT_ANECDOTE':
      return action.data
    default:
      return state
  }
}

export default reducer
