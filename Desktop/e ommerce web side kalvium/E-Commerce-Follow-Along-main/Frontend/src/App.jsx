import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {LoginPage,SignupPage,Home,CreateProduct , MyProducts} from "./Routes";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/my-products" element={<MyProducts/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App




// import { BrowserRouter , Routes , Route} from "react-router-dom";
// import { LoginPage , SignupPage, Home , CreateProduct } from "./Routes.jsx";
// import './App.css' ;
// // import Home from "./Pages/Home";
// // import CreateProduct from "./Pages/createProduct.jsx";
// function App (){
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path="/login" element={<LoginPage/>} />
//       <Route path="/signup" element={<SignupPage/>} />
//       <Route path="/" element={<Home/>} />
//       <Route path="/create-product" element={<CreateProduct/>} />

    
//     </Routes>
//     </BrowserRouter>
//   )
// }
// export default App;
