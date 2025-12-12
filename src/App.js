import { BrowserRouter,Routes,Route } from "react-router-dom"
import List from './pages/listEmploye'
import Dashboard from './pages/dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import  AddEmploye  from "./pages/addEmploye";

import EditEmploye from "./pages/editEmploye";
import Detail from "./pages/detailEmploye";
import './App.css';
import Landing from "./pages/landing";



const App=()=>{
    return(

        <BrowserRouter>

            <Routes>
                

                <Route path="/" element={<Landing/>}   />
                <Route path="/dashboard" element={<Dashboard/>}   />
                <Route path="/employees/list" element={<List/>}   />
                <Route path="/employees/add" element={<AddEmploye/>}   />
                <Route path="/employees/edit/:id" element={<EditEmploye/>}   />
                <Route path="/employees/detail/:id" element={<Detail/>}   />
                
            </Routes>
        </BrowserRouter>

    )
}
export default App