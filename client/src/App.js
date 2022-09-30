
import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/LoginRegistration/Login'
import Register from './components/LoginRegistration/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import LandingPage from './pages/LandingPage/LandingPage'
import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react'
import Cookies from 'universal-cookie'

const apiKey = 'j4mg6np3pw59';
const client = StreamChat.getInstance(apiKey)

function App() {
  return (
    <div className='app-wrapper'>
   <BrowserRouter>
   <Switch>

<Chat client={client} theme="team light">
  <ChannelListContainer/>
  <ChannelContainer/>
</Chat>

    <Route exact path="/"  component={LandingPage}/> 
    <Route exact path="/login"  component={Login}/>
   
    <Route exact path="/register" component={Register}/>
    <Route  exact path="/dashboard"  component={Dashboard}/>
      


   </Switch>
   
   
   </BrowserRouter>
   </div>
  );
}

export default App;
