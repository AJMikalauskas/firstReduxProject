import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "../src/components/Header";
import Auth from "../src/components/Auth";
import UserProfile from "../src/components/UserProfile"
import { userAuthActions } from "./store/reduxStore";
import { useSelector } from "react-redux";

function App() {
  const showingLoginPage = useSelector(userAuth => userAuth.userAuth.isAuthenticated);
//  const loginPage = <Fragment><Header /> <UserProfile /> </Fragment>
  return (
     <Fragment>
       <Header />
      {!showingLoginPage ? <Auth /> :  <UserProfile />}
      <Counter />
    </Fragment> 
  );
}

export default App;
