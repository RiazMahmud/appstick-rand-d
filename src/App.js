import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LaravelDevelopment from './Component/Home/LaravelDevelopment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GameDevelopment from './Component/Home/GameDevelopment';
import RegisterForm from './Component/RegisterForm/RegisterForm';
import UxUiDesign from './Component/Home/UxUiDesign';

function App() {
  return (
    
    <Router>
      <Switch>
          <Route path="/game">
            <GameDevelopment/>
          </Route>
          <Route path="/ux-ui">
            <UxUiDesign/>
          </Route>
          <Route path="/register">
            <RegisterForm/>
          </Route>
          <Route path="/laravel">
            <LaravelDevelopment />
          </Route>          
          <Route path="/">
            <LaravelDevelopment />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
