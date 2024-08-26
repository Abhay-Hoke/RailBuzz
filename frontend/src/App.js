

import AddPassenger from './pages/AddPassenger';
import Analytics from './pages/Analytics';
import Train from './pages/train';
import Startpage from './pages/startpage';
import UserLogin1 from './pages/adminlogin';
import About from './pages/About';
import  History from './pages/History';
import  Contacts from './pages/Contacts';
import AdminLogin from './pages/adminlogin';
import UserLogin from './pages/userlogin';
import  AddTrainForm from './pages/Admin1';
import  CustomerTable from './pages/Admin2';
import  DeleteTrain from './pages/Admin4';
import Signup from './pages/signpage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Search from './pages/Search';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path ='/' element = {<Startpage/>}/>
      <Route path ='/startpage' element = {<Startpage/>}/>
      <Route path="/history" element={<History />} />
      <Route path="/Contacts" element={<Contacts />} />
      <Route path="/admin2" element={< CustomerTable />} />
      <Route path="/search" element={<Search />} />
      <Route path="/about" element={<About />} />
      <Route path="/admin1" element={<AddTrainForm/>} />
      <Route path="/admin-login" element={<UserLogin1/>} />
      <Route path="/train-ctrl" element={<Train />} />
      <Route path="/add-passenger" element={<AddPassenger />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/delete-train" element={<DeleteTrain />} />
      <Route path="/register" element={<Signup />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;