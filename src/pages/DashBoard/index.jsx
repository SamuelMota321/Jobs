import { UserJobsAndApplications } from "./UserJobsAndApplications"
import { JobContextProvider } from "../../providers/JobContext"
import styles from './styles.module.scss'

export const Dashboard = () => {
    return (
        <JobContextProvider>
            <section className={`${styles.start}`}>
                <div className="container">
                    <h1 className="color-blue">Kenzie Academy Brasil</h1>
                    <p>Seja bem vinda (a), selecione uma das opções abaixo: </p>
                    <UserJobsAndApplications />
                </div>
            </section>
        </JobContextProvider>
    )
}