export default function Person({ name, number, deleteName }) {
    return (
        <p>
            {name}
            <strong>    {number}   </strong>
            <button onClick={deleteName}>delete</button>
        </p>
    )
}