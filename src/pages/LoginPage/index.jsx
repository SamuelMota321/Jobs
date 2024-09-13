import { FormLogin } from "./FormLogin"
import funcionaria from '../../assets/img/funcionaria.png'
import styles from './styles.module.scss'

export const LoginPage = () => {
    return (
        <section className={`${styles.flex} container`}>
            <img src={funcionaria} alt="Funcionaria Jobs" />
            <FormLogin />
        </section>
    )
}