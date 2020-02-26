import React from "react";

interface Props {
  onClickHeader: () => void;
}

class Navbar extends React.Component<Props> {
  render() {
    return (
      <div style={navStyle}>
        <h1 onClick={this.props.onClickHeader} style={navHeaderStyle}>
          React Playground
        </h1>
      </div>
    );
  }
}

const navStyle: React.CSSProperties = {
  height: "10%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const navHeaderStyle: React.CSSProperties = {};
export default Navbar;
