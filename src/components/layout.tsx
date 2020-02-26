import React from "react";
import Navbar from "./navbar";
import { ViewContainer } from "./viewcontainer"


interface Props {

}
interface State {
  view: ViewType
}

type ViewType = "main" | "forest" | "sky" | "desert"

class Layout extends React.Component<Props, State> {
constructor(props: Props) {
  super(props)  
  this.state = {
      view: "sky"
  }

  }

  navigateToMain = () => {
    this.setState({view: 'main'})
  }
  navigateToDetailView = (view: ViewType) => {
    this.setState({view: view})
  }
  render() {
    console.log(this.state);
    
    return (
      <div style={ LayoutStyle }>
        <Navbar onClickHeader={this.navigateToMain} />
        <ViewContainer view={this.state.view}/>
      </div>
    )
  }   
}

const LayoutStyle: React.CSSProperties = {
  
  backgroundColor: '#2f4454',

}
export default Layout