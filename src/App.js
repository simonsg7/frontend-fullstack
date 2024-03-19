import './assets/css/App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RequireAuth from './auth/auth'
import {Home, Login, Quotes, Register, Dashboard} from './pages'

function App() {



  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
