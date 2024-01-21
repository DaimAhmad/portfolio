import About from "./component/about";
import Home from "./component/home";
import Navbar from "./component/navbar";
import Skill from "./component/skill";
import{Routes,Route} from 'react-router-dom';



function App() {
  return (
  <div > 
    <Navbar/>
    <Routes>
  <Route path="/"element={<Home/>}>HOME</Route>
   <Route path="/about"element={<About/>}></Route>
   <Route path="/skill" element={<Skill/>}></Route>
    </Routes>
  </div>
   
  );
}


export default App;
