import { createContext, useReducer, useContext } from 'react'

function notificationReducer (state, action) {
    switch (action.type) {
      case 'VOTED':
         return `You voted for: '${action.payload.content}'`
      case 'ADDED':
         return `The anecdote '${action.payload.content}' has been added`
      case 'ERROR':
         return 'anecdote too short, must be 5 characters or more'
      case 'RESET':
         return ''
      default:
         return state
    }
}

const NotificationContext = createContext(null)
const NotificationDispatchContext = createContext(null)

export const NotificationContextProvider = ({children}) => {
   const [notification, notificationDispatch] = useReducer(
      notificationReducer,
      null
   )

   return (
      <NotificationContext.Provider value={notification}>
        <NotificationDispatchContext.Provider value={notificationDispatch}>
            {children}
        </NotificationDispatchContext.Provider>
      </NotificationContext.Provider>
   )
}

export const useNotificationValue = () => {
   return useContext(NotificationContext)
}

export const useNotificationDispatch = () => {
   return useContext(NotificationDispatchContext)
}
