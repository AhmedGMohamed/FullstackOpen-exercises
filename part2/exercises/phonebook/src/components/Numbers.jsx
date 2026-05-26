const Numbers = ({ persons }) =>
    <ul>
        {persons.map(person =>
            <li key={person.name}>
                {person.name}&nbsp;{person.number}
            </li>)}
    </ul>

export default Numbers