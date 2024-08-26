// 5th page


import { Link, useNavigate } from 'react-router-dom';
import "../styles/search.css";
import { NavBar } from './navbar';

function Search() {
  const navigate = useNavigate();


  
  
  const handleSearchTrain = () => {
    navigate('/train-ctrl');
  };

 
  
  return (
    <div style={{ backgroundImage: 'url("../pictures/44.jpg")' }}>
      <header className="main_header fixed_header">
        <div className="container">
         
        <NavBar/>
          <div >


            <nav className="top_nav_links navbar navbar-expand-lg">
            
              <div className="collapse navbar-collapse" id="searchnav">
                <ul className="navbar-nav">
                
                
                  
                  <li>
                  <Link to="/" className="nav-link">
                   <strong> Signout </strong>
                    </Link>
                    </li>
                    <li>
                  <Link to="/add-passenger" className="nav-link">
                  <strong>Add-Passenger </strong>
                    </Link>
                    </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div className="train-container">
      <div className="container d-flex flex-column align-items-center justify-content-start" style={{ height: '100vh' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <button className="btn btn-danger mb-2 " onClick={handleSearchTrain}>Search Train</button>
        </div>
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
    
  );
}

export default Search;

