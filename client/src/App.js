import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Posts from "./pages/Posts/Posts";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Header />
          <Posts />
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/write">
          <Write />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
