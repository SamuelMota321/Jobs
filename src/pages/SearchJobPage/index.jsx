import { JobContextProvider } from "../../providers/JobContext"
import { Search } from "./Search"
import { ToastContainer } from "react-toastify"
import styles from './styles.module.scss'


export const SearchJobPage = () => {


    return (
        <>
            <JobContextProvider>
                <section>
                    <div className={` ${styles.flex} container`}>
                        <h1 className="color-blue center">Busca de Vagas</h1>
                        <p className="bold center">Digite o que vc está procurando</p>
                        <Search />
                    </div>
                </section>
                <ToastContainer />
            </JobContextProvider>
        </>
    )
}