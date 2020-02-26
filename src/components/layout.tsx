import React from "react";
import Navbar from "./navbar";
import { ViewContainer } from "./viewcontainer"


interface Props {

}
interface State {
  view: "main" | "forest" | "sky" | "desert"
}

class Layout extends React.Component<Props, State> {
constructor(props: Props) {
  super(props)  
  this.state = {
      view: "main"
  }

  }

  navigateToMain() {
    alert('test')
  }

  render() {
    return (
      <div style={ LayoutStyle }>
        <Navbar onClickHeader={this.navigateToMain} />
        <ViewContainer/>
      </div>
    )
  }   
}

const LayoutStyle: React.CSSProperties = {
  
  backgroundColor: '#2f4454',

}
export default Layout