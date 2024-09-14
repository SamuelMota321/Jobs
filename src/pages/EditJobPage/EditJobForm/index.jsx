import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { JobContext } from "../../../providers/JobContext"
import { Input } from "../../../components/Input"
import { editJobSchema } from "../../../schemas/editJobSchema"
import { UserContext } from "../../../providers/UserContext"
import styles from './styles.module.scss'

export const EditForm = ({ jobId }) => {
    const { editJob, errorMessage } = useContext(JobContext)
    const { userState } = useContext(UserContext)
    const { register, handleSubmit, reset } = useForm({
        resolver: zodResolver(editJobSchema)
    })

    const submit = (formData) => {
        editJob(jobId, userState.id, formData)
        reset()
    }

    return (
        <div className="formDiv">
            <form onSubmit={handleSubmit(submit)}>
                <Input
                    type="text"
                    placeholder="Cargo"
                    {...register("position")}
                />

                <Input
                    type="number"
                    placeholder="Salário (opcional)"
                    {...register("sallary")}
                />

                <textarea
                    className={styles.textarea}
                    type="textarea"
                    rows="10"
                    placeholder="Descrição"
                    {...register("description")}
                />
                
                <p>{errorMessage}</p>
                <button className="blue" type="submit">Editar vaga</button>
            </form>
        </div>
    )
}