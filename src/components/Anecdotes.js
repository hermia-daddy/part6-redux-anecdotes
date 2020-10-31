import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteOf } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, voteHandle }) => {
  return (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={voteHandle}>vote</button>
      </div>
    </div>
  )
}

const Anecdotes = () => {
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if (filter === 'ALL') {
      return anecdotes.sort((a, b) => {
        return b.votes - a.votes
      })
    } else {
      return anecdotes
        .filter((a) => a.content.indexOf(filter) > -1)
        .sort((a, b) => {
          return b.votes - a.votes
        })
    }
  })
  const dispatch = useDispatch()
  const vote = (anecdote) => {
    dispatch(voteOf(anecdote))
    dispatch(setNotification(`you voted '${anecdote.content}'`, 5000))
  }
  return (
    <div>
      {anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          voteHandle={() => vote(anecdote)}
        />
      ))}
    </div>
  )
}

export default Anecdotes
