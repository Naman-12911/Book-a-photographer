import Cards from "../components/portal_customer/Cards";
import Single_Card from "../components/portal_customer/Single_card";
import Photographer_card from "../components/portal_customer/Photographer_card";
import Main from "../components/portal_customer/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Single_photo from "../components/portal_customer/Single_photo";

// portal 2
function Appshell() {
  return (
    <>
      <Main />
      <Switch>
        {/* enable the photographer */}
        <Route exact path="/">
          <Photographer_card />
        </Route>
        {/* enable the top-destination */}
        <Route exact path="/top-destination">
          <Cards />
        </Route>
        {/* enable the single photographer */}
        <Route exact path="/:id">
          <Single_photo />
        </Route>
        {/* enable the single destination */}
        <Route exact path="/blog/:slug">
          <Single_Card />
        </Route>
      </Switch>
    </>
  );
}

export default Appshell;
