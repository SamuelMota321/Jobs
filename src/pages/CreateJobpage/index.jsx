import { ToastContainer } from "react-toastify"
import { JobContextProvider } from "../../providers/JobContext"
import { CreateJobForm } from "./CreateJobForm"
import { Link, useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import styles from './styles.module.scss'

export const CreateJobPage = () => {
    const navigate = useNavigate()
    return (
        <JobContextProvider>
            <section className={styles.grid}>
                <div className="container">
                    <Link className={`${styles.arrow} color-blue bold`} to="/dashboard">
                        <span className="color-blue"><FaArrowLeft size={15} /></span>
                        voltar
                    </Link>
                    <div className={styles.align}>
                        <h1 className="color-blue center">Criar Vaga</h1>
                        <CreateJobForm />
                    </div>
                </div>
            </section>
            <ToastContainer />
        </JobContextProvider>

    )
}