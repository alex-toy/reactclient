import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Prediction from './Prediction';
import Fib from './Fib';
import FormProspect from './FormProspect';
import Test from './Test';

function App() {
  return (
    <Router>
      <div className="App">
        
        <header>
          <h1>Welcome to lead scoring app from Marieme and Alessio!!</h1>
          <h1>{process.env.START_API_SERVICE_PORT}</h1>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/otherpage">Other Page</Link></p>
          <p><Link to="/Prediction">Prediction Page</Link></p>
        </header>
        
        <div>
          <Route exact path="/" component={Test} />
          <Route path="/otherpage" component={OtherPage} />
          <Route path="/Prediction" component={Prediction} />
        </div>

      </div>
    </Router>
  );
}

export default App;
