import { useContext, useState } from "react"
import { Input } from "../../../components/Input"
import { JobContext } from "../../../providers/JobContext"
import { JobCard } from "../../../components/JobList/JobCard"
import styles from './styles.module.scss'

export const Search = () => {
    const { searchJobs, searchList, error } = useContext(JobContext)
    const [searchInputContent, setsearchInputContent] = useState("")

    const submit = (searchTerm) => {
        searchJobs(searchTerm)
    }

    return (
        <div className={styles.flex}>
            <Input
                type="text"
                placeholder="Pesquisa"
                onChange={(e) => {
                    setsearchInputContent(e.target.value)
                    submit(searchInputContent)
                }}

            />
            {searchInputContent ? <p className="center">Resultados de busca para: <span className="bold">{searchInputContent}</span></p> : null}
            {searchInputContent == "" ? null :
                searchList[0] ?
                    searchList.map((job, i) => (
                        <JobCard key={i} title={job.position} text={job.description} />
                    )) : <>
                        <div>
                            <h1 className="center bold">Desculpe! :(</h1>
                            <p className="center bold">Nenhum resultado encontrado</p>
                        </div>
                    </>}
            {error ? <p>Ocorreu um erro na sua pesquisa :( </p> : null}
        </div>
    )
}