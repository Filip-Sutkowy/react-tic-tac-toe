import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import * as pages from './containers/index';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact component={pages.Home} />
          <Route path='/game' component={pages.Game} />
          <Route path='/scores' component={pages.Scores} />
        </Switch>
      </Layout>    
    </div>
  );
}

export default App;
