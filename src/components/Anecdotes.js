import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteOf } from '../reducers/anecdoteReducer'

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
  const anecdotes = useSelector((state) =>
    state.sort((a, b) => {
      return b.votes - a.votes
    })
  )
  const dispatch = useDispatch()
  const vote = (id) => {
    dispatch(voteOf(id))
    console.log('vote', id)
  }
  return (
    <div>
      {anecdotes.map((anecdote) => (
        <Anecdote anecdote={anecdote} voteHandle={() => vote(anecdote.id)} />
      ))}
    </div>
  )
}

export default Anecdotes
