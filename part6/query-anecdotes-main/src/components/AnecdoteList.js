import {useMutation, useQueryClient } from 'react-query'
import { useNotificationDispatch } from '../context/NotificationContext'
import { updateVotes } from '../services/request'

export default function AnecdoteList ({data}) {
    const dispatch = useNotificationDispatch()
    const queryClient = useQueryClient()

    const resetNotification = () => {
        setTimeout(() => {
          dispatch({type: 'RESET'})
        }, 5000)
      }

    const updateVotesMutation = useMutation(updateVotes, {
        onSuccess: (anecdoteVoted) => {
          console.log('hellow')
          dispatch({type: 'VOTED', payload: {
            content: anecdoteVoted.content
          }})
          resetNotification()
          queryClient.invalidateQueries('anecdotes')
        }
    })
    
    const handleVote = (anecdote) => {
        updateVotesMutation.mutate({...anecdote, votes: anecdote.votes += 1})
    }
    return (data.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
    ))
}