import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Heroes from "./pages/Heroes";

import SiteHeader from "./components/SiteHeader";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { endpoint } from "./utils/enpoint";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Items from "./pages/Items";
import Buildings from "./pages/Buildings";
import Activities from "./pages/Activities";
import BeginnerTips from "./pages/BeginnerTips";
import Faction from "./pages/Faction";
import Hero from "./pages/Hero";
// apollo client
const apollo = new ApolloClient({
  uri: `${endpoint}/graphql`,
  cache: new InMemoryCache(),
});

export function App() {
  return (
    <Router>
      <ChakraProvider>
        <ApolloProvider client={apollo}>
          <Container maxW="100%" p="0" fontFamily="Poppins">
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
          </Container>
        </ApolloProvider>
      </ChakraProvider>
    </Router>
  );
}

export default App;
