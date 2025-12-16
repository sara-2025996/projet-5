import { useState } from "react";
import { useDispatch,  } from "react-redux";
import { postEmployees } from "../redux/employeSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/navbar";


const AddEmploye = () => {

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
  const [errors,setErrors]=useState({});


    
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const departement=['IT','Commercial','RH','Finance','Marketing','Production']

    const handelChange=(e)=>{
        const {name,value}=e.target
        setFormData({...formData,[name]:value})
        
    }

    const handleAnnuler = () => {
    navigate("/employees/list"); 
    };

    const handelSubmit=(e)=>{
    const errorData={}

        e.preventDefault()

         if(!formData.nom){
      errorData.errorNom="nom error"
    } 

     if(!formData.prenom){
      errorData.errorPrenom="prenom error"
    }

     if(!formData.email){
      errorData.errorEmail="email error"
    }

      if(!formData.telephone){
      errorData.errorTelephone="telephone error"
    }

       if(!formData.poste){
      errorData.errorPoste="poste error"
    }

       if(!formData.departement){
      errorData.errorDepartement="departement error"
    }

       if(!formData.dateEmbauche){
      errorData.errorDateEmbauche="dateEmbauche error"
    }

       if(!formData.salaire){
      errorData.errorSalaire="salaire error"
    }

    setErrors(errorData)

    if(!formData.nom || !formData.prenom || !formData.email || !formData.poste || !formData.dateEmbauche || !formData.departement || !formData.salaire ){
      return
    }

        dispatch(postEmployees(formData))
        navigate('/employees/list')
    }

    return(
      <>
    <Navbar/>

        <div className=" container-xl ">

          <h2 className="text-center mt-2" >Ajouter un employe</h2>
        <div className="border rounded container shadow">


          <form onSubmit={handelSubmit} className="container mt-3">
  <div className="row">

    {/* 1ère colonne */}
    <div className="col-12 col-md-6">
      <div className="mb-3">
        <label>Nom</label>
        <input name="nom" value={formData.nom} type="text" className="form-control" onChange={handelChange} />
     {errors.errorNom && <p className="text-danger">{errors.errorNom}</p>}

      </div>

      <div className="mb-3">
        <label>Prénom</label>
        <input name="prenom" value={formData.prenom} type="text" className="form-control" onChange={handelChange} />
     {errors.errorPrenom && <p className="text-danger">{errors.errorPrenom}</p>}

      </div>

      <div className="mb-3">
        <label>Email</label>
        <input  name="email" value={formData.email} type="email" className="form-control" onChange={handelChange} />
     {errors.errorEmail && <p className="text-danger">{errors.errorEmail}</p>}

      </div>

      <div className="mb-3">
        <label>Téléphone</label>
        <input name="telephone" value={formData.telephone} type="tel" className="form-control" onChange={handelChange} />
     {errors.errorTelephone && <p className="text-danger">{errors.errorTelephone}</p>}

      </div>


    </div>

    {/* 2ème colonne */}
    <div className="col-12 col-md-6">
      <div className="mb-3 ">
        <label>poste</label>
        <input name="poste" value={formData.poste} type="text" className="form-control" onChange={handelChange} />
     {errors.errorPoste && <p className="text-danger">{errors.errorPoste}</p>}

      </div>

        <label>departement</label>
      <div className="mb-3 d-flex    gap-4">
        {departement.map(d=>(
        <div className=" " >
        <input type="radio" name="departement" value={d} checked={formData.departement===d} onChange={handelChange} /><br></br>
        <label>{d}</label>
      </div>
          ))}<br></br>
      </div>
       {errors.errorDepartement && <p className="text-danger">{errors.errorDepartement}</p>}

      <div className="mb-3">
        <label>salaire</label>
        <input  name="salaire" value={formData.salaire}  type="number" className="form-control" onChange={handelChange} />
     {errors.errorSalaire && <p className="text-danger">{errors.errorSalaire}</p>}

      </div>

      <div className="mb-3">
        <label>dateEmbauche</label>
        <input  name="dateEmbauche" value={formData.dateEmbauche} placeholder="yyy/mm/dd"  type="text" className="form-control" onChange={handelChange} />
     {errors.errorDateEmbauche && <p className="text-danger">{errors.errorDateEmbauche}</p>}

      </div>
    <input type="submit" className="btn btn-primary m-4"/>
    <button type="button" className="btn btn-secondary m-4 ms-2"  onClick={handleAnnuler} > Annuler</button>

    </div>


  </div>
</form>


        </div>
        </div>
      </>

    )
 
};

export default AddEmploye;