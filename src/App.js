
import './App.css';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

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

          <Route   path='/info/:id'>
            <ContactInfo />
          </Route>


        </Switch>


      </div>
    </Router>
  );
}

export default App;
