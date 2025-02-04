// import { BrowserRouter,Routes,Route } from "react-router-dom"; 
// import { LoginPage } from "./Routes.jsx"
// import { SignupPage } from "./Routes.jsx"

// import './App.css';

// function App(){
//   return(
//     <BrowserRouter>
//       <Routes>
//         <Route path="/Login" element={<LoginPage/>}/>
//         <Route path="/SignUp" element={<SignupPage/>}/>

//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;

import { BrowserRouter , Routes , Route} from "react-router-dom";
import { LoginPage , SignupPage, Home, CreateProduct } from "./Routes.jsx";
import './App.css' ;
// import Home from "./Pages/Home.jsx";
function App (){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/create-page" element={<CreateProduct/>} />

    
    </Routes>
    </BrowserRouter>
  )
}
export default App;