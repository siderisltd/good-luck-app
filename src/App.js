import GoodLuck from './components/GoodLuck';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FontAwesome from "./components/FontAwesome/FontAwesome";
FontAwesome();

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/s/g/:backgroundId?/:language?/:qr?" component={GoodLuck}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;