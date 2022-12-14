import React from 'react';
import { Route } from "react-router-dom";
import Home from "./home/Home";
import Pdp from "./pdp/Pdp";
import Cabinet from "./cabinet/Cabinet"

const Routes = () => {
  return (
    <>
      <Route exact path="/">
          <Home/>
      </Route>
      <Route path="/pdp/:id">
          <Pdp/>
      </Route> 
      <Route path="/cabinet">
         <Cabinet/>
      </Route>
    </>
  )
}

export default Routes