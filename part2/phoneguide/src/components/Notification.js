export default function Notification({ message }) {
    if (message === null) {
        return null
    }
    const isError = message.includes('ERROR')
    const style = isError ? { color: 'red' } : { color: 'green' }
    return (
        <div style={style} className="message">
            {message}
        </div>
    )
}