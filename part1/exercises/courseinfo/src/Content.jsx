import Part from "./Part"
const Content = ({ parts }) => {
    return (
        <>
            {parts.map((_, ind) => { return <Part key={ind} part={parts[ind]} /> })}
        </>
    )
}

export default Content
