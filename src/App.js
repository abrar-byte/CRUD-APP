import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="edit/:id" element={<EditUser/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
