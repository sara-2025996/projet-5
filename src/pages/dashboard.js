import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEmployees } from "../redux/employeSlice";
import Navbar from "../component/navbar";
const Dashboard = () => {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees.list);

  useEffect(() => {
    if (employees.length === 0) {
      dispatch(getEmployees());
    }
  }, [employees.length, dispatch]);

  
  const totalEmployees = employees.length;
  const totalSalary = employees.reduce((acc, emp) => acc + Number(emp.salaire), 0);
  const averageSalary = totalEmployees > 0 ? (totalSalary / totalEmployees).toFixed(2) : 0;

  // Répartition par département
  const repartition = employees.reduce((acc, emp) => {
    acc[emp.departement] = (acc[emp.departement] || 0) + 1;
    return acc;
  }, {});

    const listDepa=[]
  for(let depar in repartition){
    if(repartition[depar]>0){
        listDepa.push({departement :depar,nbr:repartition[depar]})
    }
  }
  console.log(repartition, totalEmployees);

  const currentMonth = new Date().getMonth() + 1;

//  anniversaire ce mois
const moisActuelle = employees.filter(emp => {
  const emb = new Date(emp.dateEmbauche);
  return emb.getMonth() + 1 === currentMonth;
});

// anciennete
const anni = moisActuelle.map(emp => {
  const start = new Date(emp.dateEmbauche);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  // si pas encore atteint le jour exact → retirer 1 mois
  if (days < 0) {
    months -= 1;
  }

  // si mois négatif → ajuster
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return {...emp,anciennete: `${years} ans ${months} mois`};
});


  //  matricule 
  const matricule = (id) =>( `EMP${id.toString().padStart(4, '0')}`);

  return (
    <>
    <Navbar/>
    <div className="container-xl mt-4">
      <h1 className="text-center mb-4">Dashboard RH</h1>

      
      <div className="row text-center mb-4">
        <div className="col-md-4">
          <div className="alert alert-warning p-3 shadow">
            <h5>Effectif total</h5>
            <h3>{totalEmployees}</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="alert alert-warning p-3 shadow">
            <h5>Masse salariale</h5>
            <h3>{totalSalary} DH</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="alert alert-warning p-3 shadow">
            <h5>Salaire moyen</h5>
            <h3>{averageSalary} DH</h3>
          </div>
        </div>
      </div>

      {/* Répartition par département */}
      <div className=" card shadow mb-4 p-3">
        <h4>Répartition par département</h4>
        {listDepa.map((l) => (
            <div key={l.departement} className="mb-2">
              <strong>{l.departement} ({l.nbr})</strong>
              <div className="progress">
                <div
                  className="progress-bar bg-warning "
                  role="progressbar"
                  style={{ width:totalEmployees? `${(l.nbr / totalEmployees) * 100}%`: "0%" }}
                ></div>
              </div>
            </div>
          
        ))}
      </div>

      {/* Anniversaires d’embauche du mois */}
      <div className="mb-4">
        <h4>Anniversaires d'embauche ce mois</h4>
        {anni.length > 0 ? (
          <ul className="list-group">
            {anni.map(emp => (
              <li key={emp.id} className="list-group-item d-flex justify-content-between align-items-center">
                {emp.nom} {emp.prenom} - {emp.anciennete}
                <span className="badge bg-dark">{matricule(emp.id)}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun anniversaire ce mois.</p>
        )}
      </div>

    
     
</div>
    </>


  );
};

export default Dashboard;
