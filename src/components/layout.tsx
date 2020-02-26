import React from "react";
import Navbar from "./navbar";
import Content from "./content"

class Layout extends React.Component {

  componentDidMount() {
    window.addEventListener('resize', () => {
      window.innerWidth
    })
  }

  render() {
    return (
      <div style={ LayoutStyle }>
        <Navbar />
        <Content/>
      </div>
    )
  }   
}

const LayoutStyle: React.CSSProperties = {
  
  backgroundColor: '#2f4454',

}
export default Layout