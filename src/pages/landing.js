import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="container mt-5">

      {/* Description du projet */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">InnovateTech</h1>
        <p className="text-muted mt-3">
          Cette application permet de gérer les employés d’une entreprise 
          et calculer automatiquement l’anciennet´e.
        </p>

        <Link to="/dashboard" className="btn btn-primary btn-lg mt-3">
          Bienvenu
        </Link>
      </div>

      
      <div className="mt-5">
        <h2 className="text-center mt-5 ">Notre Équipe</h2>

        <div className="row d-flex  justify-content-center align-items-center   text-center">

    
          <div className="col-md-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              style={{ width: 100, height: 100 }}
              className="rounded-circle mb-3"
              alt="Membre"
            />
            <h5>Bouzekri Sara</h5>
          </div>

    
          <div className="col-md-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              style={{ width: 100, height: 100 }}

              className="rounded-circle mb-3"
              alt="Membre"
            />
            <h5>Bounit Ikram</h5>
          </div>

        

        </div>
      </div>

    </div>
  );
};

export default Landing;
