export default function Filter({filter, handleFilter}) {
    return (
        <form>
            <div>Filter shown with 
                <input onChange={handleFilter} value={filter}/>
            </div>
        </form>
    )
}