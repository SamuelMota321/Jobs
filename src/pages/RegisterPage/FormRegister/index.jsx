import { useForm } from "react-hook-form"
import { Input } from "../../../components/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "../../../schemas/registerSchema"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext"
import styles from './styles.module.scss'



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
        <div className="formDiv">
            <form onSubmit={handleSubmit(submit)}>
                <h1 className="color-blue">Cadastre-se</h1>
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
                <button className={`${styles.button} blue`} type="submit">Cadastrar-se</button>
            </form>
        </div>
    )
}