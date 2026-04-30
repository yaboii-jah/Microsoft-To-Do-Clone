import { Header } from "../../components/header"

export function Tasks({type}: {type: string}) {
    return (
        <div className="tasks-container">
            <Header />
            <h1>{type}</h1>
        </div>
    )
}