import React from "react";

class Navbar extends React.Component {
  render() {
    return (
    <div style = {navStyle}>
      test
    </div>
    )
  }
}

const navStyle: React.CSSProperties = {
  height: '10%',
  width: '100vw',
  backgroundColor: 'grey',

}
export default Navbar