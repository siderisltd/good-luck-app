import GoodLuck from './components/GoodLuck/GoodLuck';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/s/g/:backgroundId/:language?">
          <GoodLuck />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;