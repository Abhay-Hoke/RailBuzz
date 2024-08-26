// second page

import { useNavigate } from 'react-router-dom';
import "../styles/search.css";
import { NavBar } from './navbar.js';


function Startpage() {
  const navigate = useNavigate();


  const click1 = () => {
    navigate('/admin-login');
  };

  const click2 = () => {
    navigate('/user-login');
  };

 

  return (
    <>
    <div>
  
     

      <NavBar/>
      
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <pre>




          </pre>
          <button className="btn btn-primary mx-2" onClick={click1}>
            Admin Login
          </button>
          <button className="btn btn-success mx-2" onClick={click2}>
            User Login
          </button>
    
        </div>
      </div>
      <footer className="fixed-bottom">
        <div className="container d-flex flex-column align-items-center">
          <div className="mt-3">
            <p className="copyright">© 2024 RailBuzz</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

export default Startpage;
