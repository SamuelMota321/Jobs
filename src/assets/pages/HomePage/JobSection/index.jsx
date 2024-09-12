import { JobList } from "../../../components/JobList"

export const JobSection = ({ title }) => {
    return (
        <section className="container">
            {title ? <h1 className="center color-blue">{title}</h1> : ""}
            <JobList />
        </section>
    )
}