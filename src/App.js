import ChatApp from "./components/ChatApp/ChatApp";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <ChatApp />
        </Route>
        <Route path='/login'>
          <LoginForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;