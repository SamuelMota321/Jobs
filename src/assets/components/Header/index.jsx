import { useNavigate } from "react-router-dom"
import { UserContext } from "../../providers/UserContext"
import { useContext } from "react"

export const Header = () => {
    const { user, userLogout } = useContext(UserContext)
    const navigate = useNavigate()

    return (
        <header>
            <h2 onClick={() => navigate("/")}>Jobs</h2>
            {user ?
                <div>
                    <button onClick={() => navigate("/vagas")}>Icone de Pesquisa</button>
                    <button onClick={() => navigate("/dashboard")}>Usuario</button>
                    <button onClick={() => userLogout()}>Sair</button>
                </div>
                :
                <div>
                    <p onClick={() => navigate("/login")}>acesso a empresa</p>
                    <button onClick={() => navigate("/vagas")}>confira nossas vagas</button>
                </div>}

        </header>

    )
}