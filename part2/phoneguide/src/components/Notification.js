export default function Notification({ message }) {
    if (message === null) {
        return null
    }
    const isError = message.toLowerCase().includes('error')
    const style = isError ? { color: 'red' } : { color: 'green' }
    return (
        <div style={style} className="message">
            {message}
        </div>
    )
}