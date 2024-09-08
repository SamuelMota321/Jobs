import { useContext, useState } from "react"
import { Input } from "../../../components/Input"
import { JobContext } from "../../../providers/JobContext"
import { JobCard } from "../../../components/JobList/JobCard"

export const Search = () => {
    const { searchJobs, searchList, error } = useContext(JobContext)
    const [searchInputContent, setsearchInputContent] = useState("")

    const submit = (searchTerm) => {
        searchJobs(searchTerm)
    }

    return (
        <div>
            <Input type="text"
                placeholder="Pesquisa"
                onChange={(e) => {
                    setsearchInputContent(e.target.value)
                    submit(searchInputContent)
                }}

            />
            <span>icone de pesquisa</span>
            {searchInputContent ? <p>resultados de busca para: <span>{searchInputContent}</span></p> : null}
            {searchInputContent == "" ? null :
                searchList[0] ?
                    searchList.map((job, i) => (
                        <JobCard key={i} title={job.position} text={job.description} />
                    )) : <>
                        <div>
                            <h1>Desculpe! :(</h1>
                            <p>Não encontramos resultados para sua pesquisa</p>
                        </div>
                    </>}
            {error ? <p>Ocorreu um erro na sua pesquisa :( </p> : null}
        </div>
    )
}