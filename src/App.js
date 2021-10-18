import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Appointment from './Components/Appointment/Appointment';
import Navbar from './Components/Shared/Navbar/Navbar';
import Footer from './Components/Shared/Footer/Footer';
import Login from './Components/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/appointment/:serviceId">
              <Appointment />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
