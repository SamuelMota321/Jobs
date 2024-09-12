import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { JobContext } from "../../providers/JobContext"
import { modalSchema } from "../../schemas/modalSchema"
import { UserContext } from "../../providers/UserContext"
import styles from './styles.module.scss'

export const JobModal = ({ title, isjobModalOpen, setJobModalOpen, jobId, }) => {
    const { myApplications } = useContext(JobContext)
    const { userState } = useContext(UserContext)
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(modalSchema)
    })
    
    const submit = (formData) => {
        setTimeout(() => {
            setJobModalOpen(!isjobModalOpen)
        }, 2000)
        const userId = userState.id
        myApplications(formData, jobId, userId, title)
    }

    return (
        <div className={styles.modal} role="dialog">
            {userState ?
                <div>
                    <div>
                        <h2 className="color-blue">Candidatar-se</h2>
                        <p>Você está se canditando para <span className="bold">{title}</span></p>
                    </div>
                    <form onSubmit={handleSubmit(submit)}>
                        <Input
                            type="text"
                            placeholder="Nome"
                            {...register("name")}
                            error={errors.name}
                        />

                        <Input
                            type="email"
                            placeholder="E-mail"
                            {...register("email")}
                            error={errors.email}

                        />

                        <Input
                            type="url"
                            placeholder="Linkedin"
                            {...register("linkedin")}
                            error={errors.linkedin}
                        />
                        <button type="submit">Cadidatar-se</button>
                    </form>
                </div>
                :
                <div>
                    <div>
                        <h2 className="color-blue">Candidatar-se</h2>
                        <p>Você deve estar logado para se canditadar como <span className="bold">{title}</span></p>
                    </div>
                </div>}

        </div>
    )
}