
import './App.css';
import Header from "./Header" 
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';
import Signup from './Signup';
import { AuthProvider} from "../src/context/AuthContext"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <AuthProvider>
          <Route path="/signup">
            <Signup />
          </Route>
          </AuthProvider>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/" >
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
      
    </div>)
}

export default App;
