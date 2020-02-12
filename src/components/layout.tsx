import React from "react";
import Navbar from "./navbar";
import Content from "./content"

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Content/>
      </div>
    )
  }   
}

export default Layout