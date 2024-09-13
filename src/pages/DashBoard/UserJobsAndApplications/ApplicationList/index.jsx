import { useContext, useEffect } from "react"
import { JobContext } from "../../../../providers/JobContext"
import { UserContext } from "../../../../providers/UserContext"
import { ApplicationJobCard } from "./ApplicationJobCard"

export const ApplicationList = () => {
    const { getMyApplications, myApplicationList } = useContext(JobContext)
    const { userState } = useContext(UserContext)

    useEffect(() => {
        getMyApplications(userState)
    }, [])

    return (
        <div>
            {myApplicationList[0] ? myApplicationList.map((job, i) => (
                <ApplicationJobCard key={i} title={job.title} name={job.name} email={job.email}/>
            )): <p>você ainda não se inscreveu em nenhuma vaga</p> }
        </div>
    )

}