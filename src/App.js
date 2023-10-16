import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage.js';
import HomePage from './components/HomePage.js';
import Register from './components/Register.js';

function App() {
  return (
      <Routes>
        <Route exact path='/' Component={LoginPage}/>
        <Route path='/home' Component={HomePage}/>
        <Route path='/signup' Component={Register}/>
      </Routes>
  );
}

export default App;
