//(TODO: Samrat): conditional render Login page, list appointment and add doctor page
import "./App.css";
import Doctors from "./doctors";
import { DoctorContextProvider } from "./doctors/context";
import {
  AppointmentContextProvider,
} from "./appointments/context";
import Navs from "./nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ProductContextProvider } from "./products/context";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import AddDoctor from "./doctors/addDoctor";
import AddProduct  from "./products/addProducts";
import { useEffect, useState } from "react";
import { validate } from "./services/db";
import { UserContextProvider } from "./user/context";
import DetailEdit from "./doctors/details";
import ProductDetailEdit from "./products/details"
import ChangePassword from "./user";
import Appointments from "./appointments";
import SignUp from "./Signup";
import Product from "./products"

const ProtectedRoute = ({ authenticated, component: Component, ...rest }) => {
  return (
    <Route
      render={(props) =>
        authenticated ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [validated, setValidated] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await validate();
      setAuthenticated(res);
      setValidated(true);
      // validate token
    })();
  }, [validated]);
  return (
    <Router>
      <ProductContextProvider>
        
      <AppointmentContextProvider>
        <UserContextProvider>
          <DoctorContextProvider>
            {validated ? (
              <div>
                <Navs authenticated={authenticated} />
                <Switch>
                  {validated && !authenticated ? (
                    <Route path="/login" exact component={Login} />
                  ) : (
                    ""
                  )}
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/doctors" exact component={Doctors} />
                  <Route path="/signup" exact component={SignUp} />
                   <Route path="/products" exact component={Product} /> 
                  <ProtectedRoute
                    authenticated={authenticated}
                    path="/doctors/add"
                    component={AddDoctor}
                  />
                  <ProtectedRoute
                    authenticated={authenticated}
                    path="/products/add"
                    component={AddProduct}
                  />
                  <ProtectedRoute
                    authenticated={authenticated}
                    path="/appointments"
                    component={Appointments}
                  />
                  <ProtectedRoute
                    authenticated={authenticated}
                    path="/admin/changepassword"
                    component={ChangePassword}
                  />
                  <Route path={`/doctors/:id`} component={DetailEdit} />
                  <Route path={`/products/:id`} component={ProductDetailEdit} />
                  <Redirect to="/" />
                </Switch>
              </div>
            ) : (
              <div><h1>Loading.. Please wait....</h1></div>
            )}
          </DoctorContextProvider>

        </UserContextProvider>
      </AppointmentContextProvider>
      
      </ProductContextProvider>
    </Router>
  );
}

export default App;
