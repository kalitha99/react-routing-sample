
import './App.css';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import UpdateForm from './UpdateForm';

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

          <Route   path='/edit/:id'>
            <UpdateForm />
          </Route>


        </Switch>


      </div>
    </Router>
  );
}

export default App;
