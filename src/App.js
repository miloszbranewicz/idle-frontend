import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Heroes from "./pages/Heroes/Heroes";
import SiteHeader from "./components/SiteHeader";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { endpoint } from "./utils/enpoint";
import Items from "./pages/Items/Items";
import Buildings from "./pages/Buildings/Buildings";
import Activities from "./pages/Activities/Activities";
import BeginnerTips from "./pages/BeginnerTips/BeginnerTips";
import Faction from "./pages/Faction/Faction";
import Hero from "./pages/Hero/Hero";
// apollo client
const apollo = new ApolloClient({
  uri: `${endpoint}/graphql`,
  cache: new InMemoryCache(),
});

export function App() {
  return (
    <Router>
      <ApolloProvider client={apollo}>
        <SiteHeader />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/heroes/">
            <Heroes />
          </Route>
          <Route path="/heroes/:name">
            <Hero />
          </Route>
          <Route path="/items">
            <Items />
          </Route>
          <Route path="/buildings">
            <Buildings />
          </Route>
          <Route path="/activities">
            <Activities />
          </Route>
          <Route path="/beginner-tips">
            <BeginnerTips />
          </Route>
          <Route path="/faction/:name">
            <Faction />
          </Route>
        </Switch>
      </ApolloProvider>
    </Router>
  );
}

export default App;
