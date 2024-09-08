import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { SearchJobPage } from "../pages/SearchJobPage"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { Dashboard } from "../pages/DashBoard"
import { CreateJobPage } from "../pages/CreateJobpage"
import { EditJobPage } from "../pages/EditJobPage"
import { ProtectedRoutes } from "./ProtectedRoutes"


export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/vagas" element={<SearchJobPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>                     
            <Route path="/dashboard" element={<ProtectedRoutes />}>
                <Route index element={<Dashboard />} />
            </Route>                    
            <Route path="/criar-vagas" element={<ProtectedRoutes />}>
                <Route index element={<CreateJobPage />} />
            </Route>           
            <Route path="/editar-vagas" element={<ProtectedRoutes />}>
                <Route index element={<EditJobPage />} />
            </Route>           
        </Routes>
    )
}