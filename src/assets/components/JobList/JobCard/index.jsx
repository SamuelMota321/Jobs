import { useState } from "react"
import { JobModal } from "../../JobModal"


export const JobCard = ({ title, text, jobId }) => {
    const [visibleDetails, isVisibleDetais] = useState(false)
    const [isjobModalOpen, setJobModalOpen] = useState(false)

    return (
        <div>
            <div>
                <button onClick={() => isVisibleDetais(!visibleDetails)}>icone</button>
                <h3>{title}</h3>
                <button onClick={() => setJobModalOpen(!isjobModalOpen)}>Candidatar-se</button>
                {visibleDetails ? <p>{text}</p> : <></>}
                {isjobModalOpen ? <JobModal title={title} jobId={jobId} isjobModalOpen={isjobModalOpen} setJobModalOpen={setJobModalOpen} /> : <></>}
            </div>
        </div>
    )
}