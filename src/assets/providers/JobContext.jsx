import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const JobContext = createContext({})

export const JobContextProvider = ({ children }) => {
    const [jobList, setJobList] = useState([])
    const [userJobList, setUserJobList] = useState([])
    const [myApplicationList, setMyApplicationList] = useState([])
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [searchList, setSearchList] = useState([])
    const navigate = useNavigate()


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
        const getJobList = async () => {
            try {
                const { data } = await api.get('/jobs')
                setJobList(data)
                setError(false)
            } catch (e) {
                setError(!error)
            }
        }
        getJobList()
    }, [])

    const getUserJobList = async ({ id }) => {
        try {

            const { data } = await api.get(`users/${id}/jobs`)
            setUserJobList(data)
        } catch (e) {
            setError(!error)
        }
    }

    const searchJobs = async (searchTerm) => {
        try {
            const { data } = await api.get(`/jobs?position_like=${searchTerm}`)
            setSearchList(data)
        } catch (e) {
            setError(!error)
        }
    }

    const getMyApplications = async ({ id }) => {
        try {
            const { data } = await api.get(`/applications?userId=${id}`)
            setMyApplicationList(data)

        } catch (e) {
            setError(!error)
        }
    }

    const myApplications = async ({ name, email, linkedin }, jobId, userId, title) => {
        try {
            const { data } = await api.post("/applications", {
                jobId: (jobId + 1),
                userId: userId,
                title: title,
                name: name,
                email: email,
                linkedin: linkedin
            })
            setTypeToast("Sua inscrição foi feita com sucesso!", "success")
        } catch (e) {
            setTypeToast("Ops, algo deu errado!", "error")
        }
    }

    const createJob = async (formData) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            const authorization = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const { data } = await api.post("/jobs", formData, authorization);

            setTypeToast("Sua vaga foi criada com sucesso!", "success")

        } catch (e) {
            setTypeToast("Ops, algo deu errado!", "error")
        }
    };

    const editJob = async (jobId, userId, formData) => {
        const filledFields = Object.entries(formData).filter(([_, value]) => value !== undefined && value !== "")

        if (filledFields.length > 0) {
            try {
                const token = localStorage.getItem("@TOKEN");
                const authorization = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
                const { } = await api.put(`/jobs/${jobId}`, { ...formData, userId }, authorization)

                setTypeToast("Sua vaga foi editada com sucesso", "success")
                
                setTimeout(() => {
                    navigate("/dashboard")
                }, 2500);

            } catch (e) {
                setTypeToast("Ops! algo deu errado.", "error")
            }
        } else {
            setErrorMessage("Você precisa preencher algum dos campos para poder enviar")
        }
    };



    const deleteJob = async (jobId) => {
        const token = localStorage.getItem("@TOKEN");
        const authorization = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        await api.delete(`/jobs/${jobId}`, authorization)
    }


    return (
        <JobContext.Provider value={{
            jobList,
            error,
            searchList,
            myApplicationList,
            userJobList,
            errorMessage,
            searchJobs,
            getMyApplications,
            myApplications,
            createJob,
            getUserJobList,
            deleteJob,
            editJob
        }}>
            {children}
        </JobContext.Provider>
    )
} 