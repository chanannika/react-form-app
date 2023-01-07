import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Preview from './Pages/Preview';
import Success from './Pages/Success';

function App() {
  return (
    <Routes>
      <Route path='/' exact={true} element={<Register/>}/>
      <Route path='/preview' element={<Preview/>}/>
      <Route path='/success' element={<Success/>}/>
    </Routes>
  );
}

export default App;
