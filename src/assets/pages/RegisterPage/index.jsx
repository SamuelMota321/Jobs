import { Link } from "react-router-dom"
import { FormRegister } from "./FormRegister"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


export const RegisterPage = () => {
    return (
        <section>
            <p>
                <span>setinha</span>
                <Link to="/login">
                voltar
                </Link>
            </p>
            <FormRegister/>
            <ToastContainer/>
        </section>
    )
}