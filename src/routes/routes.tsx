import {Route, Routes} from "react-router-dom";
import Homepage from "../pages/homepage/homePage";
import EmployeesPage from "../pages/employees/employeesPage";

export default function RoutesC() {

    return (
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/employees" element={<EmployeesPage />} />
        </Routes>
    )
}
