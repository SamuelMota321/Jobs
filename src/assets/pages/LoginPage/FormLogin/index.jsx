import { Link } from "react-router-dom"
import { Input } from "../../../components/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { loginSchema } from "../../../schemas/LoginSchema"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext"


export const FormLogin = () => {
    const { userLogin, error} = useContext(UserContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    })

    const submit = (formData) => {
        userLogin(formData)
    }   

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <h1>Faça login</h1>
                <Input
                    type="email"
                    placeholder="E-mail"
                    {...register("email")}
                    error={errors.email}
                />
                <Input
                    type="Password"
                    placeholder="Senha"
                    {...register("password")}
                    error={errors.password}
                />
                {error  == "Incorrect password"? <p>Senha Incorreta</p> : <></>}
                {error  == "Cannot find user"? <p>Usuário não encontrado</p> : <></>}
                <button type="submit">Entrar</button>
            </form>

            <p>Não possui cadastro? <Link to="/register">Cadastre-se</Link></p>
        </div>
    )
}