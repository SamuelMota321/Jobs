import { ToastContainer } from "react-toastify"
import { JobContextProvider } from "../../providers/JobContext"
import { CreateJobForm } from "./CreateJobForm"
import { useNavigate } from "react-router-dom"

export const CreateJobPage = () => {
    const navigate = useNavigate()
    return (
        <JobContextProvider>
            <section>
                <button onClick={() => navigate("/dashboard")}>{"<-"} voltar</button>
                <div>
                    <h1>Criar Vaga</h1>
                    <CreateJobForm />
                </div>
            </section>
            <ToastContainer/>
        </JobContextProvider>

    )
}