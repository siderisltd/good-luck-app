import GoodLuckComponent from './components/GoodLuck/GoodLuckComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/s/g/:backgroundId?/:language?/:qr?" component={GoodLuckComponent}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;