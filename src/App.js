
import './App.css';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactForm from './ContactForm';

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path='/'>
            <Contact />
          </Route>

          <Route   path='/add'>
            <ContactForm />
          </Route>


        </Switch>


      </div>
    </Router>
  );
}

export default App;
