import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import PhonebookView from './views/PhonebookView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Container from './components/Container';

// import style from './App.module.css';


class App extends Component {
  render() {
    return (
          <Router>
          <Container>
            <AppBar />

            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route path="/register" component={RegisterView} />
              <Route path="/login" component={LoginView} />
              <Route path="/contacts" component={PhonebookView} />
            </Switch>
        </Container>
        </Router>
      );
  }
}

export default App;
