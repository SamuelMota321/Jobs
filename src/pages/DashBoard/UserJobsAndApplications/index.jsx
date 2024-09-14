import { useState } from "react"
import { JobList } from "./JobList"
import { ApplicationList } from "./ApplicationList"
import { useNavigate } from "react-router-dom"
import styles from './styles.module.scss'
import { LuPlusCircle } from "react-icons/lu";


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
            <div className={styles.flex}>
                <p className={`${MyJobs ? "color-blue bold" : " bold"} ${styles.cursor}`} onClick={() => setJobs()}>Minhas vagas</p>
                <p className={`${MyApplications ? "color-blue bold" : " bold"} ${styles.cursor}`} onClick={() => setApplications()}>Minhas candidaturas</p>
            </div>
            {MyJobs ?
                <div className={styles.jobs}>
                    <button className="blue" onClick={() => navigate("/criar-vagas")}>
                        <LuPlusCircle size={21} />
                        Criar vaga
                    </button>
                    <JobList />
                </div> : null}
            {MyApplications ?
                <div className={styles.applications}>
                    <ApplicationList />
                </div>
                : null}
        </div>

    )
}