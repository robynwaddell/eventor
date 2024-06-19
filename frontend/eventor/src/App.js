import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';  
import Hosts from './pages/Hosts';
import { NavLink, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Header />
    <main>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/events' element={<Events />}/>
          <Route path='/hosts' element={<Hosts />}/>
      </Routes>
    </main>

    </>
  );
}

export default App;
