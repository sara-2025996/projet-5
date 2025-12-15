import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getEmployees } from "../redux/employeSlice";
import {  Link } from "react-router-dom";


const Detail = () => {
  const list = useSelector((state) => state.employees.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (list.length === 0) {
      dispatch(getEmployees());
    }
  }, [list.length, dispatch]);

  const { id } = useParams();
  const employe = list.find((f) => f.id === (id));

  if (!employe) {
    return <div className="alert alert-danger mt-3">Employé non trouvé!</div>;
  }

  return (
    <div className="container w-50 mt-5">
      <h2 className="text-center " >les information de {employe.nom} {employe.prenom}</h2>
      <div className=" alert alert-primary shadow p-3">
        
        
        <p><strong>Poste:</strong> {employe.poste}</p>
        <p><strong>Département:</strong> {employe.departement}</p>
        <p><strong>Salaire:</strong> {employe.salaire}</p>
        <p><strong>Email:</strong> {employe.email}</p>
        <p><strong>Téléphone:</strong> {employe.telephone}</p>
        <p><strong>Date d'embauche:</strong> {employe.dateEmbauche}</p>
      </div>
       <Link to={`/employees/edit/${employe.id}`}>
            <button className="btn btn-primary me-2 mt-4" onClick={(e) =>{e.stopPropagation()}}>
              Modifier
            </button>
        </Link>

      <button className="btn btn-outline-dark mt-4" onClick={()=>navigate('/employees/list')} >retourner</button>
    </div>
  );
};

export default Detail;