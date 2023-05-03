
import './App.css';
import { Navbar} from './components/Navbar';
import { LogIn} from './components/LogIn';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home} from './components/Home';
import { ForgotPassword} from './components/ForgotPassword';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/ForgotPassword' element={<ForgotPassword/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
