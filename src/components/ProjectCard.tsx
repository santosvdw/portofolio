export default function ProjectCard (data: any) {
    const {name, id} = data.data
    return (
    <div>
        <h1>{name}</h1>
    </div>
    )
}