import './App.css';
import { Routes, Route } from 'react-router-dom';
import Success from './Pages/Success';
import TaxForm from './Pages/TaxForm';
import TaxResult from './Pages/TaxResult';
function App() {
  return (
    <Routes>
      <Route path='/' element={<TaxForm/>}/>
      <Route path='/result' element={<TaxResult/>}/>
      <Route path='/success' element={<Success/>}/>
    </Routes>
  );
}

export default App;
