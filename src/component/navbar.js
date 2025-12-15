 import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg p-1 navbar-dark bg-secondary">
      <div className="container-fluid">

        {/* LOGO */}
        <Link className="navbar-brand  fw-bold" to="/">
        <h4>InnovateTech</h4>
          
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item mt-2">
              <Link className="nav-link " to="/dashboard">
                
              <h5>Dashboard</h5>
              </Link>
            </li>

            <li className="nav-item mt-2">
              <Link className="nav-link " to="/employees/list">
                <h5>les employee</h5>
              </Link>
              
            </li>

        
            <li className="nav-item">
               <Link className="nav-link " to="/employees/add">
               <button className="btn btn-outline-light">ajouter</button>
                
              </Link>
            </li>

         

            
          
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;