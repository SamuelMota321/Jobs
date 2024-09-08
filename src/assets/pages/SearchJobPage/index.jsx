import { JobContextProvider } from "../../providers/JobContext"
import { Search } from "./Search"
import { ToastContainer } from "react-toastify"

export const SearchJobPage = () => {
    

    return (
        <>
            <JobContextProvider>
                <section>
                    <h1>Busca de Vagas</h1>
                    <p>Digite o que vc está procurando</p>
                    <Search/> 
                </section>
                <ToastContainer/>
            </JobContextProvider>
        </>
    )
}