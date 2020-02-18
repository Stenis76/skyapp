import React from "react";
import Navbar from "./navbar";
import Content from "./content"

class Layout extends React.Component {
  render() {
    return (
      <div style={ LayoutStyle }>
        <Navbar/>
        <Content/>
      </div>
    )
  }   
}

const LayoutStyle: React.CSSProperties = {
  height: '100%',
  width: '100%',
  backgroundColor: '#2f4454',

}
export default Layout