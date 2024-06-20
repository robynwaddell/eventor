import { Route, Routes, Link } from 'react-router-dom';
import Hosts from './pages/Hosts';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import AddEvent from './pages/Addevent';
import Events from './pages/Events';
import Editevent from './pages/Editevent';
import Login from './pages/Login';
import Denied from './pages/Denied';
import Hostevent from './pages/Hostevent';
import Becometohost from './pages/Becometohost';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/events' element={<Events />}/>
          <Route path='/hosts' element={<Hosts />}/>
          <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/create-event" element={<AddEvent />} />
                    <Route path="/edit-event/:id" element={<Editevent />} />
                    <Route path="/eventsss" element={<Events />} />
                    <Route path="/permission-denied" element={<Denied />} />
                    <Route path="/profile" element={<Hostevent />} />
                    <Route path="/Becometohost" element={<Becometohost />} />
      </Routes>
      </main>
      
    </>
  );
}

export default App;
