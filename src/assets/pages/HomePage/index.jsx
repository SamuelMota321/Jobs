import { JobSection } from "./JobSection"
import { JobContextProvider } from "../../providers/JobContext"
import { Banner } from "./Banner"
import { AboutUs } from "./AboutUs"
import { ToastContainer } from "react-toastify"

export const HomePage = () => {
    return (
        <>
            <JobContextProvider>
                <Banner />
                <AboutUs />
                <JobSection title={"Confira nossas vagas"} />
                <ToastContainer/>
            </JobContextProvider>
        </>
    )
}