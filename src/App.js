import './App.css';
import { CarBrand } from './components/CarBrand/CarBrand';
import { LogIn } from './components/LogIn/LogIn';
import { MainLanding } from './components/MainLanding/MainLanding';
import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
        <div className="App">
            
            
        <Switch>
          <Route exact path="/">
              <LogIn />
          </Route>
                <Route exact path="/content">
                    <NavBar />
            <MainLanding />
            <CarBrand />
                  </Route>
                </Switch>
          
        </div>
      </Router>
  );
}

export default App;
