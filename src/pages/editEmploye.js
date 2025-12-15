import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import {  EditeEmployees,getEmployees } from "../redux/employeSlice"

const EditEmploye=()=>{
const dispatch = useDispatch();
const navigate = useNavigate();
const list = useSelector(state => state.employees.list);
const { id } = useParams();

// get employe si list est vide
useEffect(() => {
    if (list.length === 0) {
        dispatch(getEmployees());
    }
}, [list.length, dispatch]);


const employe = list.find(l => l.id === id);


    const [formData,setFormData]=useState(
        {
            nom:"",
            prenom:"",
            email:"",
            telephone:0,
            poste:"",
            departement:"",
            salaire:0,
            dateEmbauche:"",   
        }
    )
    const departement = ["RH", "IT", "Marketing", "Finance","Production"];


    useEffect(() => {
        if (employe) {
            setFormData(employe)
    }
}, [employe])

    const handelChange=(e)=>{
        const {name,value}=e.target
        setFormData({...formData,[name]:value})
    }
const handelSubmit=(e)=>{
        e.preventDefault()

      if(!formData.nom || !formData.prenom || !formData.email || !formData.poste || !formData.dateEmbauche || !formData.departement || !formData.salaire ){
      alert("Tous les champs doivent être remplis !");
        return
      }
        dispatch(EditeEmployees({ id: (id),...formData}))
        navigate(`/employees/detail/${id}`)
    }


if (!employe) {
    return <div className="container alert alert-danger mt-3">Employé non trouvé!!!</div>;
}

    

    return(
         

        <div className="container">

            <h1 className="text-center" >Modifier un employée</h1>
        <div className="border rounded container shadow">


          <form onSubmit={handelSubmit} className="container mt-3">
  <div className="row">

     {/* 1ère colonne  */}
    <div className="col-md-6">
      <div className="mb-3">
        <label>Nom</label>
        <input name="nom" value={formData.nom} type="text" className="form-control" onChange={handelChange} />
      </div>

      <div className="mb-3">
        <label>Prénom</label>
        <input name="prenom" value={formData.prenom} type="text" className="form-control" onChange={handelChange} />
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input  name="email" value={formData.email} type="email" className="form-control" onChange={handelChange} />
      </div>

      <div className="mb-3">
        <label>Téléphone</label>
        <input name="telephone" value={formData.telephone} type="tel" className="form-control" onChange={handelChange} />
      </div>


    </div>

    {/* 2ème colonne */}
    <div className="col-md-6">
      <div className="mb-3">
        <label>poste</label>
        <input name="poste" value={formData.poste} type="text" className="form-control" onChange={handelChange} />
      </div>

        <label>departement</label>
      <div className="mb-3 d-flex gap-4">
        {departement.map(d=>(
        <div >
        <input type="radio" name="departement" value={d} checked={formData.departement===d} onChange={handelChange} />
        <label>{d}</label>
      </div>


        ))}
      </div>

      <div className="mb-3">
        <label>salaire</label>
        <input  name="salaire" value={formData.salaire}  type="number" className="form-control" onChange={handelChange} />
      </div>

      <div className="mb-3">
        <label>dateEmbauche</label>
        <input  name="dateEmbauche" value={formData.dateEmbauche}  placeholder="yyy/mm/dd"  type="text" className="form-control" onChange={handelChange} />
      </div>
    <input type="submit" value={'modifier'} className="btn btn-primary m-4"/>

    </div>


  </div>
</form>


        </div>
        </div>
    )
    
}
export default EditEmploye;