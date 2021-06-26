import { Home } from './src/pages/Home'
import { NewRoom } from './src/pages/NewRoom';
import { Room } from './src/pages/Room';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthContextProvider } from './src/contexts/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" exact component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  )
}
export default App;
