import Cards from "../components/portal_customer/Cards";
import SingleCard from "../components/portal_customer/SingleCard";
import PhotographerCard from "../components/portal_customer/PhotographerCard";
import Main from "../components/portal_customer/Main";
import { Switch, Route } from "react-router-dom";
import SinglePhoto from "../components/portal_customer/SinglePhoto";
import Footer from "../components/portal1/Footer";
import Profile from "../components/portal_customer/Profile";
import BookingLopp from "../components/portal_customer/BookingLopp";

// portal 2
function Appshell({authInfo,setauthInfo}) {
  return (
    <>
     { <Main setauthInfo={setauthInfo} authInfo={authInfo} /> }     
      <Switch>        
         <Route exact path="/">
          <PhotographerCard />
        </Route> 
         
        <Route exact path="/top-destination">
          <Cards />
        </Route>
      
        <Route exact path="/photographer/:id">
          <SinglePhoto />
        </Route> 
        <Route  exact path="/booking" component={BookingLopp} />
        
         <Route exact path="/cutomer/Profile">
          <Profile />
        </Route> 
        
        <Route exact path="/blog/:slug">
          <SingleCard /> 
        </Route> 
      </Switch>
      <Footer />
     
    </>
  );
}

export default Appshell;