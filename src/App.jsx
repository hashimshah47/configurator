// import {Interface} from "./components/Interface";
import ProjectName from "./pages/projectName/ProjectName";
import Navbar from "./components/Navbar/Navbar";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import WelcomeBack from "./pages/WelcomeBack/WelcomeBack";
import CreateProject from "./pages/CreateProject/CreateProject";
// import { Popup } from "./components/Popup";
// import AlertDialogSlide from "./components/Dialog/Dialog";

function App() {
  const Links = () => {
    return(
      <>
      {/* <Link to="/login">Login Page</Link> */}
        <br/>
      {/* <Link to="/register">Register</Link> */}
        <br/>
      <Link to="/projectname">Configurator</Link>
        <br/>
      {/* <Link to="/welcome">Welcome Back</Link> */}
        <br/>
      {/* <Link to="/createproject">Create Project</Link> */}
      </>
    )
  }
  
  return (
    <>
    <Navbar/>
<Routes>
   <Route path="/" element={<Links/>}/>    
   {/* <Route path="/login" element={<Login />} /> */}
   <Route path="/projectname" element={<ProjectName />} />
   {/* <Route path="/register" element={<Register />} /> */}
   {/* <Route path="/welcome" element={<WelcomeBack />} /> */}
   {/* <Route path="/createproject" element={<CreateProject />} /> */}

</Routes>
{/* <Interface/> */}

    {/* <ProjectName/> */}
      {/* <Canvas shadow camera = {{ position: [4, 0, -12], fov: 35}}>
        <XR>
        <Experience />
        </XR>
      </Canvas> */}
      {/* <Popup/> */}
    </>
  );
}

export default App;
