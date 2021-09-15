import Cards from "../components/portal_customer/Cards";
import Single_Card from "../components/portal_customer/Single_card";
import Photographer_card from "../components/portal_customer/Photographer_card";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Single_photo from "../components/portal_customer/Single_photo";

// portal 2
function Appshell() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Photographer_card />
          {/* <Cards /> */}
        </Route>
        <Route exact path="/:id">
          <Single_photo />
        </Route>
        <Route exact path="/blog/:slug">
          <Single_Card />
        </Route>
      </Switch>
    </div>
  );
}

export default Appshell;
