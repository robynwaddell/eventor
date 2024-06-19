
import { Route, Routes, Link } from 'react-router-dom';
import Signup from './pages/Signup';
import AddEvent from './pages/Addevent';
import Events from './pages/Events';
import Editevent from './pages/Editevent';
import Login from './pages/Login';

function App() {
  return (
    <main>
      <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/create-event" element={<AddEvent />} />
                    <Route path="/edit-event/:id" element={<Editevent />} />
                    <Route path="/events" element={<Events />} />
                </Routes>
    </main>
  );
}

export default App;
