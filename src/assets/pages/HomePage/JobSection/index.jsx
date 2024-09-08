import { JobList } from "../../../components/JobList"

export const JobSection = ({ title }) => {
    return (
        <section>
            {title ? <h1>{title}</h1> : ""}
            <JobList />
        </section>
    )
}