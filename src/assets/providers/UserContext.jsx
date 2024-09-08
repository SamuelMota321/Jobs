import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
    const [userState, setUserState] = useState(null)
    const [user, setUser] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation();

    const setTypeToast = (title, type) => {
        if (type == "success") {
            toast.success(`${title}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        } else if (type == "error") {
            toast.error(`${title}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
    }


    useEffect(() => {
        setError(false);
    }, [location]);


    const userLogin = async (formData) => {
        try {
            const { data } = await api.post("/login", formData)
            localStorage.setItem("@TOKEN", data.accessToken)
            navigate("/dashboard")
            setUserState(data.user)
            setUser(true)
        } catch (error) {
            if (error.response.data) {
                setError(error.response.data)
            }
        }
    }

    const userLogout = () => {
        localStorage.removeItem("@TOKEN")
        setUserState(null)
        setUser(false)
        navigate("/")
    }

    const userRegister = async (formData) => {
        try {
            const { data } = await api.post("/users", formData)
            setTypeToast("Sua conta foi criada com sucesso!", "success");

            setTimeout(() => {
                navigate("/login")
            }, 2500)

        } catch (error) {
            const { data } = error.response
            setTypeToast("Ops, algo deu errado!", "error");

            if (data === "Email already exists") {
                setError(true)
            }
        }
    }

    return (
        <UserContext.Provider value={{ userLogin, userLogout, userRegister, error, userState, user }}>
            {children}
        </UserContext.Provider>
    )
}