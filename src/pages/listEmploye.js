import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getEmployees, RemoveEmployee } from "../redux/employeSlice"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"






const List=()=>{
    const employees=useSelector(state=>state.employees.list)

    const dispatch=useDispatch()
    const navigat=useNavigate()

    useEffect(()=>{
        dispatch(getEmployees())
    },[dispatch])

    const supprimer=(id)=>{
        dispatch(RemoveEmployee(id))
    }


    return(
        <div className="container" >
            <button onClick={()=>navigat(`/employees/add`)} className="btn btn-outline-primary mt-4 ">ajouter</button>

            <table className="table table-hover text-center mt-3" >
                <thead>
                    <tr>
                        <th>nom</th>
                        <th>prenom</th>
                        <th>post</th>
                        <th>departement</th>
                        <th>salaire</th>
                        <th>dateEmbauche</th>
                        <th>email</th>
                        <th>telephone</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(m=>(
                        <tr key={m.id}>
                            <td>{m.nom}</td>
                            <td>{m.prenom}</td>
                            <td>{m.post}</td>
                            <td>{m.departement}</td>
                            <td>{m.salaire}</td>
                            <td>{m.dateEmbauche}</td>
                            <td>{m.email}</td>
                            <td>{m.telephone}</td>
                            <td >
                                <button onClick={()=>navigat(`/employees/detail/${m.id}`)} className="btn btn-primary  " >voir</button>
                                <Link to={`/employees/edite/${m.id}`} >
                                <button className="btn btn-secondary ms-4 " >modifier</button>
                                </Link>
                                <button onClick={()=>supprimer(m.id)} className="btn btn-danger ms-4" >supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
export default List
