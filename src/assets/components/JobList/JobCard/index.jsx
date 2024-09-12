import { useState } from "react"
import { JobModal } from "../../JobModal"
import styles from './styles.module.scss'

export const JobCard = ({ title, text, jobId }) => {
    const [visibleDetails, setVisibleDetails] = useState(false)
    const [isjobModalOpen, setJobModalOpen] = useState(false)

    return (
        <>
            <li>
                <div className={styles.flex}>
                    {/* Botão para alternar a visibilidade do dropdown */}
                    <div onClick={() => setVisibleDetails(!visibleDetails)}>
                        <button
                            className={`${styles.toggleButton} ${visibleDetails ? styles.active : ""}`}
                        >
                            <span className={visibleDetails ? `${styles.horizontal}` : styles.horizontal}></span>
                            <span className={visibleDetails ? `${styles.vertical}` : styles.horizontal}></span>
                        </button>
                        <h3>{title}</h3>
                    </div>

                    <button className="light" onClick={() => setJobModalOpen(!isjobModalOpen)}>Candidatar-se</button>

                </div>
                {/* Dropdown que aparece ou desaparece suavemente */}
                <p className={`${styles.dropdownmenu} ${visibleDetails ? styles.active : null}`}>
                    {text}
                </p>
            </li>

            {isjobModalOpen && (
                <JobModal
                    title={title}
                    jobId={jobId}
                    isjobModalOpen={isjobModalOpen}
                    setJobModalOpen={setJobModalOpen}
                />
            )}
        </>
    )
}
