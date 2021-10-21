
import GamesDescription from './components/GamesDescription.js';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Root from './components/Root.js';

function App() {
  return (
    <>
    <Router>
      <Route path={"/"} component={Root} exact={true} />
      <Route path={"/games"} component={GamesDescription} />
    </Router>
    </>
  );
}

export default App;
