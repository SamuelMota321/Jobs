import { useContext } from "react"
import { JobCard } from "./JobCard"
import { JobContext } from "../../providers/JobContext"


export const JobList = () => {

    const { jobList, error } = useContext(JobContext)


    return (
        <ul>
            {error ? <p>Não foi possiver renderizar a lista de vagas</p> : jobList.map((job, i) => (
                <JobCard key={i} jobId={i} title={job.position} text={job.description} />
            ))}
        </ul>
    )
}