
import { Route, Routes, Link } from 'react-router-dom';
import Signup from './pages/Signup';
import AddEvent from './pages/Addevent';
import Events from './pages/Events';
import Editevent from './pages/Editevent';
import Login from './pages/Login';

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
      </Routes>
    </main>

    </>
  );
}

export default App;
