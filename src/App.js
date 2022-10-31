import React from "react";
import { BrowserRouter as Router, Switch, Routes,  Route, Link } from "react-router-dom";
import Errorpage from "./pages/Errorpage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import Create from "./pages/Create";
import Edit from "./pages/edit";
import Search from "./pages/Search";

const App = () => {
  return (
    <div>
      <center>
      <Router>
      <Routes>          
        <Route path="/" element={<Welcome />} />
        <Route path="/search" element={<Search />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Errorpage />} />
          <Route path="/home" element={<Home />} />

      </Routes>
    </Router>
      </center>
    </div>
  );
}

export default App;



// const App = () => {
//   return (
//     <div>
//       <center>
//         <p>
//          welcome to reactjs app....
//         </p>
//       </center>
//     </div>
//   );
// }

// export default App;








// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
