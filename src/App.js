import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Register from './Components/Register';
import Thankyou from './Components/Thankyou';
import Dashboard from './Components/Dashboard';
import ForgotPassword from './Components/ForgotPassword';
import EditProfile from './Components/EditProfile';
import ChangePassword from './Components/ChangePassword';
import Otp from './Components/Otp';
import List from './Components/List';
import Detail from './Components/Detail';
import PersonalDetails from './Components/PersonalDetails';
import OrderCreateList from './Components/OrderCreatePage';
import Cards from './Components/Cards';
import ViewPage from './Components/ViewPage';
import CreatePage from './Components/CreatePage';
import EditPage from './Components/EditPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path="/forgot" element={<ForgotPassword/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/editProfile" element={<EditProfile/>} />
          <Route path="/changePassword" element={<ChangePassword/>} />
          <Route path="/otp" element={<Otp/>} />
          <Route path="/table" element={<List/>} />
          <Route path="/detail/:id" element={<Detail/>} />
          <Route path="/personaldetail" element={<PersonalDetails/>} />
          <Route path="/orderList" element={<OrderCreateList/>} />
          <Route path="/cards" element={<Cards/>} />
          <Route path="/viewpage" element={<ViewPage/>} />
          <Route path="/editpage" element={<EditPage/>} />
          <Route path="/createpage" element={<CreatePage/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
