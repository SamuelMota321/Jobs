import { Link, useLocation, useNavigate } from "react-router-dom"
import { JobContextProvider } from "../../providers/JobContext"
import { EditForm } from "./EditJobForm"
import { ToastContainer } from "react-toastify"
import { FaArrowLeft } from "react-icons/fa"
import styles from './styles.module.scss'

export const EditJobPage = () => {
    const location = useLocation()
    const { title, jobId } = location.state
    const navigate = useNavigate()
    return (
        <JobContextProvider>
            <section className={styles.grid}>
                <div className="container">
                <Link className={`${styles.arrow} color-blue bold`} to="/login">
                        <span className="color-blue"><FaArrowLeft size={15} /></span>
                        voltar
                    </Link>
                    <div className={styles.align}>
                        <h1 className="color-blue center">Editando: {title}</h1>
                        <EditForm jobId={jobId} />
                    </div>
                </div>
            </section>
            <ToastContainer />
        </JobContextProvider>

    )
}