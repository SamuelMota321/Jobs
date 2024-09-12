import { useState } from "react"
import { JobModal } from "../../JobModal"
import styles from './styles.module.scss'

export const JobCard = ({ title, text, jobId }) => {
    const [visibleDetails, setVisibleDetails] = useState(false)
    const [isjobModalOpen, setJobModalOpen] = useState(false)

    return (
        <div>
            <div>
                {/* Botão para alternar a visibilidade do dropdown */}
                <button
                    className={`${styles.toggleButton} ${visibleDetails ? styles.active : ""}`}
                    onClick={() => setVisibleDetails(!visibleDetails)}>
                </button>

                <h3>{title}</h3>
                <button className="light" onClick={() => setJobModalOpen(!isjobModalOpen)}>Candidatar-se</button>

                {/* Dropdown que aparece ou desaparece suavemente */}
                {visibleDetails ? <p className={`${styles.dropdownmenu} ${visibleDetails ? styles.active : null}`}>
                    {text}
                </p>: null}

                {isjobModalOpen && (
                    <JobModal
                        title={title}
                        jobId={jobId}
                        isjobModalOpen={isjobModalOpen}
                        setJobModalOpen={setJobModalOpen}
                    />
                )}
            </div>
        </div>
    )
}
