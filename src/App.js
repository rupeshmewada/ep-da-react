import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Head from './component/Head';
import Home from './component/Home';
import Nav from './component/Nav';
import FindDoctor from './component/FindDoctor';

function App() {
  return (
    <div className="App">
      <Head />


      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/nav" element={<Nav />} ></Route>
        <Route path='/doctors' element={<FindDoctor/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
