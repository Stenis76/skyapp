import React from "react";

class Navbar extends React.Component {
  render() {
    return (
    <div style = {navStyle}>
      <h1 style = {navHeaderStyle}>React Playground</h1>
    </div>
    )
  }
}

const navStyle: React.CSSProperties = {
  height: '10%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'

}

const navHeaderStyle: React.CSSProperties = {

}
export default Navbar