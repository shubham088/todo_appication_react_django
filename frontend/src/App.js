
import './App.css';
import HomePage from './components/homePage'
import HomePageWithRedux from './components/homePageRedux'
import UpdateTodoComponent from './components/UpdateTodo'
import CreateTodoComponent from './components/createTodo'
import {Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
        <div className="App">
          <header className="App-header">
          <Route exact path='/' component={HomePage} />
          <Route exact path='/home-redux' component={HomePageWithRedux} />
          <Route exact path = '/edit/:id' component = {UpdateTodoComponent} /> 
          <Route exact path = '/create_todo' component = {CreateTodoComponent} /> 
          </header>
        </div>
    </Switch>
  );
}

export default App;
