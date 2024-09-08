import { useState } from "react"
import { JobList } from "./JobList"
import { ApplicationList } from "./ApplicationList"
import { useNavigate } from "react-router-dom"

export const UserJobsAndApplications = () => {
    const [MyJobs, setMyJobs] = useState(false)
    const [MyApplications, setMyApplications] = useState(false)
    const navigate = useNavigate()

    const setJobs = () => {
        if (MyApplications) {
            setMyApplications(!MyApplications)
        }
        setMyJobs(!MyJobs)
    }

    const setApplications = () => {
        if (MyJobs) {
            setMyJobs(!MyJobs)
        }
        setMyApplications(!MyApplications)
    }

    return (
        <div>
            <p onClick={() => setJobs()}>Minhas vagas</p>
            <p onClick={() => setApplications()}>Minhas candidaturas</p>
            {MyJobs ?
                <div>
                    <button onClick={() => navigate("/criar-vagas")}>Criar vaga</button>
                    <JobList />
                </div> : ''}
            {MyApplications ?
                <div>
                    <ApplicationList />
                </div>
                : ''}
        </div>

    )
}