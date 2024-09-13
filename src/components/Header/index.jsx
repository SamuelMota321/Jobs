import { useNavigate } from "react-router-dom"
import { UserContext } from "../../providers/UserContext"
import { useContext } from "react"
import styles from "./styles.module.scss"

export const Header = () => {
    const { user, userLogout, userState } = useContext(UserContext)
    const navigate = useNavigate()
    const getInitials = () => {
        if (userState?.name) {
            const nameParts = userState.name.split(' ')
            const firstNameInitial = nameParts[0]?.charAt(0).toUpperCase() || ''
            const lastNameInitial = nameParts[nameParts.length - 1]?.charAt(0).toUpperCase() || ''
            return `${firstNameInitial}${lastNameInitial}`
        }
        return ''
    }

    return (
        <header>
            <div className="container">
                <h2 onClick={() => navigate("/")}>Jobs</h2>
                {user ?
                    <div className={styles.buttonLayout}>
                        <button className={`${styles.circleButton} light`} onClick={() => navigate("/vagas")}>p</button>
                        <button className={`${styles.circleButton} blue`} onClick={() => navigate("/dashboard")}>{getInitials()}</button>
                        <button className="light" onClick={() => userLogout()}>Sair</button>
                    </div>
                    :
                    <div className={styles.buttonLayout}>
                        <p className="bold" onClick={() => navigate("/login")}>acesso a empresa</p>
                        <button className="blue" onClick={() => navigate("/vagas")}>Confira nossas vagas</button>
                    </div>}
            </div>
        </header>

    )
}