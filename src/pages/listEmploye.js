import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees, RemoveEmployee } from "../redux/employeSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/navbar";


const List = () => {
  const employees = useSelector((state) => state.employees.list);
  const nbr=employees.length
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const supprimer = (id) => {
    dispatch(RemoveEmployee(id));
  };

  return (
    <>
    <Navbar/>

    <div className="container-xl mt-4">
        <h2 className="text-center">list des employés ({nbr})

        </h2>
        <button onClick={() => navigate(`/employees/add`)} className="btn btn-outline-primary mb-2">
          Ajouter
        </button>
    
      <div className="table">
        <table className="table table-hover">
          <thead className="table-secondary">
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Poste</th>
              <th>Département</th>
             
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            
            {employees.map((m) => (
              <tr key={m.id}  onClick={() => navigate(`/employees/detail/${m.id}`)}  >
                <td>{m.nom}</td>
                <td>{m.prenom}</td>
                <td>{m.poste}</td>
                <td>{m.departement}</td>
              
                
                <td className="d-flex flex-wrap ">
                  
                
                 
                  <button onClick={(e) =>{e.stopPropagation(); supprimer(m.id)}} className="btn btn-danger ">
                    Supprimer
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      </div>


    </>

  );
};

export default List;
