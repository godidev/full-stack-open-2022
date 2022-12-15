export default function PersonForm({ handleSubmit, handleChange, newPerson }) {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input required name="name" onChange={handleChange} value={newPerson.name || ''} />
            </div>
            <div>
                number: <input required name="number" type="number" onChange={handleChange} value={newPerson.number || ''} />
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}