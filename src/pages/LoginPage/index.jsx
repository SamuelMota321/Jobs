import { FormLogin } from "./FormLogin"
import funcionaria from '../../assets/img/funcionaria.png'
import styles from './styles.module.scss'

export const LoginPage = () => {
    return (
        <section className={styles.flex}>
            <div className="container">
                <img src={funcionaria} alt="Funcionaria Jobs" />
                <FormLogin />
            </div>
        </section>
    )
}