import { Link } from "react-router-dom"
import { FormRegister } from "./FormRegister"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { FaArrowLeft } from "react-icons/fa";
import styles from './styles.module.scss'



export const RegisterPage = () => {
    return (
        <section className={styles.section}>
            <div className={`${styles.container} container`}>
                <p className={styles.align}>
                    <Link className={`${styles.align} color-blue bold`} to="/login">
                        <span className="color-blue"><FaArrowLeft size={15} /></span>
                        voltar
                    </Link>
                </p>
                <div className={styles.center}>
                    <FormRegister />
                </div>
            </div>
            <ToastContainer />
        </section>
    )
}