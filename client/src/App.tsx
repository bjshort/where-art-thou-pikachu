import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import styled from 'styled-components';

const Layout = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/">
            <Home />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
