import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { createJobSchema } from "../../../schemas/createJobSchema"
import { useContext } from "react"
import { Input } from "../../../components/Input"
import { JobContext } from "../../../providers/JobContext"
import { UserContext } from "../../../providers/UserContext"

export const CreateJobForm = () => {
    const { createJob } = useContext(JobContext)
    const { userState } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(createJobSchema)
    })

    const submit = (formData) => {
        createJob({...formData, userId: userState.id})
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <Input
                    type="text"
                    placeholder="Cargo"
                    {...register("position")}
                    error={errors.position}
                />

                <Input
                    type="number"
                    placeholder="Salário (opcional)"
                    {...register("sallary")}
                    error={errors.sallary}
                />
                <Input
                    type="text"
                    placeholder="Descrição"
                    {...register("description")}
                    error={errors.description}
                />

                <button type="submit"><span>+</span> Criar Vaga </button>
            </form>
        </div>
    )
}