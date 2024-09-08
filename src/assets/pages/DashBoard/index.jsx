import { UserJobsAndApplications } from "./UserJobsAndApplications"
import { JobContextProvider } from "../../providers/JobContext"

export const Dashboard = () => {
    return (
            <JobContextProvider>
                <section>
                    <h1>Kenzie Academy Brasil</h1>
                    <p>Seja bem vinda (a), selecione uma das opções abaixo</p>
                    <UserJobsAndApplications />
                </section>
            </JobContextProvider>
    )
}