import React from 'react'
//import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
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

const Anecdotes = (props) => {
  const anecdotes = () => {
    if (props.filter === 'ALL') {
      return props.anecdotes.sort((a, b) => {
        return b.votes - a.votes
      })
    } else {
      return props.anecdotes
        .filter((a) => a.content.indexOf(props.filter) > -1)
        .sort((a, b) => {
          return b.votes - a.votes
        })
    }
  }

  const vote = (anecdote) => {
    props.voteOf(anecdote)
    props.setNotification(`you voted '${anecdote.content}'`, 5000)
  }
  return (
    <div>
      {anecdotes().map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          voteHandle={() => vote(anecdote)}
        />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  voteOf,
  setNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(Anecdotes)
