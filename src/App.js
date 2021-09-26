import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Heroes from "./pages/Heroes/Heroes";
import SiteHeader from "./components/SiteHeader/SiteHeader";
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
        <main className="mainContent">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/heroes/" component={Heroes}></Route>
            <Route path="/heroes/:id" component={Hero}></Route>
            <Route path="/items" component={Items}></Route>
            <Route path="/buildings" component={Buildings}></Route>
            <Route path="/activities" component={Activities}></Route>
            <Route path="/beginner-tips" component={BeginnerTips}></Route>
            <Route path="/faction/:id" component={Faction}></Route>
          </Switch>
        </main>
      </ApolloProvider>
    </Router>
  );
}

export default App;
