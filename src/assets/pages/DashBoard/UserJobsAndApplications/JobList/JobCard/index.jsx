import { useContext, useState } from "react"
import { JobContext } from "../../../../../providers/JobContext"
import { useNavigate } from "react-router-dom"

export const JobCard = ({ title, jobId }) => {
    const [updateJobDelete, setUpdateJobDelete] = useState(true) //esse estado é para tirar o card deletado da visibilidade do usuário sem ter q fazer uma nova renderização
    const { deleteJob } = useContext(JobContext)
    const navigate = useNavigate()

    const handleEdit = () => {
        navigate("/editar-vagas", { state: { title, jobId } })
    }

    return (
        <div>
            {updateJobDelete ?
                <div>
                    <h1>{title}</h1>
                    <button onClick={handleEdit}>editar</button>
                    <button onClick={() => { deleteJob(jobId), setUpdateJobDelete(!updateJobDelete) }}>excluir</button>
                </div> : null
            }
        </div>
    )
}