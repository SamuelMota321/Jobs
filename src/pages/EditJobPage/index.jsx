import { useLocation, useNavigate } from "react-router-dom"
import { JobContextProvider } from "../../providers/JobContext"
import { EditForm } from "./EditJobForm"
import { ToastContainer } from "react-toastify"

export const EditJobPage = () => {
    const location = useLocation()
    const { title, jobId } = location.state
    const navigate = useNavigate()
    return (
        <JobContextProvider>
            <section>
                <button onClick={() => navigate("/dashboard")}>{"<-"} voltar</button>
                <div>
                    <h1>Editando: {title}</h1>
                    <EditForm jobId={jobId} />
                </div>
            </section>
            <ToastContainer />
        </JobContextProvider>

    )
}