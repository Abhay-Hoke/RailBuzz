import { useNavigate } from 'react-router-dom';
import "../styles/AddPassenger.css"
import { NavBar } from './navbar';

function Analytics() {
  const navigate = useNavigate();

  const click1 = () => {
    navigate('/admin1');
  };

  const click2 = () => {
    navigate('/admin2');
  };

 
  const click4 = () => {
    navigate('/delete-train');

  };

   
  return (
    <div>
    <NavBar/>
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center" style={{ height: '50vh' }}>
        <div className="col-md-6 text-center">
          <h1 className="mb-5">RAILWAY ADMIN ZONE</h1>
          <div className="d-flex flex-column align-items-center">
            <button type="primary" size="small" style={{ background: 'red', marginBottom: '10px' }} onClick={click1}>ADD Train</button>
            <button type="primary" size="small" style={{ background: 'red', marginBottom: '10px' }} onClick={click2}>Customer Status</button>
            <button type="primary" size="small" style={{ background: 'red' }} onClick={click4}>Delete-Train</button>
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
    </div>
  );
}

export default Analytics;
