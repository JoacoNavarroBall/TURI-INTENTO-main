import React from "react";

import Header from "./../Header/Header"
import Routers from "../../router/Routers"
import Footer from "./../Footer/Footer"



const Layout = () => {
    return (
      <div className="layout">
        <Header />
        <Routers />
        <Footer />
        
      </div>
    );
  };
  
  export default Layout;