import Cards from "../components/portal_customer/Cards";
import Single_Card from "../components/portal_customer/Single_card";
import { BrowserRouter as Switch, Route } from "react-router-dom";

// portal 2
function Appshell() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Cards />
        </Route>
        <Route exact path="/blog/:slug">
          <Single_Card />
        </Route>
      </Switch>
    </div>
  );
}

export default Appshell;
