// first page 


import { Link} from 'react-router-dom';
import IRCTCLogo from '../pictures/IRCTC-Logo.png';

export function NavBar() {

    return(
<header className="main_header fixed_header">
        <div className="container">
          <div className="logo_head">
            <img src={IRCTCLogo} alt="IRCTC Logo" className="logo-img" />
            <p className="railbuzz">RailBuzz</p>
           
            <div>
            </div>
          </div>
          <div className="menu_box">
            <nav className="top_nav_links navbar navbar-expand-lg">
              <div className="collapse navbar-collapse" id="topNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/startpage" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/history" className="nav-link">
                      History
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Contacts" className="nav-link">
                      Contacts
                    </Link>
                  </li>
                
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    )

}