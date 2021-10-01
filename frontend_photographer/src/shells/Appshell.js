import Cards from "../components/portal_customer/Cards";
import Single_Card from "../components/portal_customer/Single_card";
import Photographer_card from "../components/portal_customer/Photographer_card";
import Main from "../components/portal_customer/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Single_photo from "../components/portal_customer/Single_photo";
<<<<<<< HEAD
import Profile from "../components/portal_customer/Profile";
import Footer from "../components/portal_customer/Footer";
=======
>>>>>>> c4c8b492a8865c7c4568b84cb686665bf0d672b9

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
      <Footer />

    </>
  );
}

export default Appshell;
