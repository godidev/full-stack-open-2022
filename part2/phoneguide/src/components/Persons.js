import Person from "./Person"

export default function Persons({persons, filterBy }) {
    return (
        persons.filter(person => person.name
            .toLowerCase()
            .includes(filterBy.toLowerCase()))
            .map(({ id, name, number }) =>
              <Person key={id} name={name} number={number} />
            )
    )
}