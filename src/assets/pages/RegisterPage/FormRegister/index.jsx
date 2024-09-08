import { useForm } from "react-hook-form"
import { Input } from "../../../components/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "../../../schemas/registerSchema"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext"



export const FormRegister = () => {
    const { userRegister, error } = useContext(UserContext)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(registerSchema)
    })

    const submit = (formData) => {
        userRegister(formData)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <h1>Cadastre-se</h1>
            <Input
                type="text"
                placeholder="Nome da Empresa"
                {...register("name")}
                error={errors.name}
            />

            <Input
                type="email"
                placeholder="E-mail"
                {...register("email")}
                error={errors.email}
            />
            {error ? "Email já cadastrado" : <></>}
            <Input
                type="password"
                placeholder="Senha"
                {...register("password")}
                error={errors.password}
            />

            <Input
                type="password"
                placeholder="Confirmar Senha"
                {...register("confirmPassword")}
                error={errors.confirmPassword}
            />
            <button type="submit">Cadastrar-se</button>
        </form>
    )
}