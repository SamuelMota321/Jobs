import { useContext, useEffect } from "react"
import { JobContext } from "../../../../providers/JobContext"
import { UserContext } from "../../../../providers/UserContext"
import { JobCard } from "./JobCard"

export const JobList = () => {
    const { getUserJobList, userJobList } = useContext(JobContext)
    const { userState } = useContext(UserContext)

    useEffect(() => {
        getUserJobList(userState)
    }, [])

    return (
        <>
            {userJobList[0] ? userJobList.map((job, i) => (
                <JobCard key={i} title={job.position} jobId={job.id} />
            )) : <p>você ainda não postou nenhuma vaga</p>}
        </>
    )
}