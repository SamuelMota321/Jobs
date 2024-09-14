import { useContext, useState } from "react"
import { JobContext } from "../../../../../providers/JobContext"
import { useNavigate } from "react-router-dom"
import { BsFillPencilFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";


export const JobCard = ({ title, jobId }) => {
    const [updateJobDelete, setUpdateJobDelete] = useState(true) //esse estado é para tirar o card deletado da visibilidade do usuário sem ter q fazer uma nova renderização
    const { deleteJob } = useContext(JobContext)
    const navigate = useNavigate()

    const handleEdit = () => {
        navigate("/editar-vagas", { state: { title, jobId } })
    }

    return (
        <>
            {updateJobDelete ?
                <div>
                    <h2>{title}</h2>
                    <div>
                        <button className="color-blue" onClick={handleEdit}><BsFillPencilFill size={21} /></button>
                        <button className="color-blue" onClick={() => { deleteJob(jobId), setUpdateJobDelete(!updateJobDelete) }}><FaTrash size={21} /></button>
                    </div>
                </div> : null
            }
        </>
    )
}