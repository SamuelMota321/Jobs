import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext, useEffect, useRef } from "react"
import { JobContext } from "../../providers/JobContext"
import { modalSchema } from "../../schemas/modalSchema"
import { UserContext } from "../../providers/UserContext"
import { IoCloseOutline } from "react-icons/io5";
import styles from './styles.module.scss'

export const JobModal = ({ title, isjobModalOpen, setJobModalOpen, jobId, }) => {
    const { myApplications } = useContext(JobContext)
    const { userState } = useContext(UserContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(modalSchema)
    })

    const modalRef = useRef(null)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setJobModalOpen()
            }
        }

        const handleKeyPress = (event) => {
            if (event.key === 'Escape') {
                setJobModalOpen()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleKeyPress)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [setJobModalOpen])

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
                <div ref={modalRef} className="formDiv">
                    <div>
                        <h2 className="color-blue">Candidatar-se</h2>
                        <p>Você está se canditando para <span className="bold">{title}</span></p>
                        <button className={styles.closeButton} onClick={() => setJobModalOpen(!isjobModalOpen)}> <IoCloseOutline size={30} /> </button>
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
                        <button className="blue" type="submit">Cadidatar-se</button>
                    </form>
                </div>
                :
                <div ref={modalRef}>
                    <div>
                        <h2 className="color-blue">Candidatar-se</h2>
                        <p>Você deve estar logado para se canditadar como <span className="bold">{title}</span></p>
                        <button className={styles.closeButton} onClick={() => setJobModalOpen(!isjobModalOpen)}> <IoCloseOutline size={30} /> </button>
                    </div>
                </div>}

        </div>
    )
}   