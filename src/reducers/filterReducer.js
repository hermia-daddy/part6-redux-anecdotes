export const filterChange = (type, filter) => {
  return {
    type,
    filter
  }
}

const reducer = (state = 'ALL', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    case 'ALL':
      return 'ALL'
    default:
      return state
  }
}

export default reducer
