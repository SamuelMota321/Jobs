import { useState } from "react"

export const ApplicationJobCard = ({ title, name, email }) => {
    const [expand, setExpand] = useState(false)

    return (
        <div>
            <div>
                <h1>{name} - {title}</h1>
                <button onClick={() => setExpand(!expand)}>{expand ? "-" : "+"}</button>
            </div>
            {expand ? <div>
                <p>Detalhes da candidatura:</p>
                <p>Email: <b>{email}</b></p>
            </div>: null}
            
        </div>
    )
}