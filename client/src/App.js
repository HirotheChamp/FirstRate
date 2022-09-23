
import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/LoginRegistration/Login'
import Register from './components/LoginRegistration/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import LandingPage from './pages/LandingPage/LandingPage'

function App() {
  return (
   <BrowserRouter>
   <Switch>

    <Route exact path="/"  component={LandingPage}/> 
    <Route exact path="/login"  component={Login}/>
   
    <Route exact path="/register" component={Register}/>
    <Route  exact path="/dashboard"  component={Dashboard}/>
      


   </Switch>
   
   
   </BrowserRouter>
  );
}

export default App;
