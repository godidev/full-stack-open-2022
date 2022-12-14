export default function Notification({ name }) {
    if (name === null) {
        return null
    }
    return (
        <div className="success-message">
            Added {name}
        </div>
    )
}