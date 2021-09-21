import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Hero from "./pages/Hero";
import Faction from "./pages/Faction";
import SiteHeader from "./components/SiteHeader";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { endpoint } from "./utils/enpoint";
import {  ChakraProvider, Container } from "@chakra-ui/react";
// apollo client
const apollo = new ApolloClient({
  uri: `${endpoint}/graphql`,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ChakraProvider>
        <ApolloProvider client={apollo}>
          <div className="App">
            <Container maxW="container.lg">
              <SiteHeader />

              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/hero/:id">
                  <Hero></Hero>
                </Route>
                <Route path="/faction/:id">
                  <Faction></Faction>
                </Route>
              </Switch>
            </Container>
          </div>
        </ApolloProvider>
      </ChakraProvider>
    </Router>
  );
}

export default App;
