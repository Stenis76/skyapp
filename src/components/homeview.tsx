import React from "react";
import NavigationItem from "./navigationitem"

interface Props {
  onNavigationItemClick: (view: string) => void
}

class HomeView extends React.Component<Props> {
 sectionId = ['forest', 'sky', 'desert'];
  render() {
    return (
      // <div style ={contentStyle}>
      //   <NavigationItem text='Forrest' imageSource="resources/images/sebastian-unrau-sp-p7uuT0tw-unsplash.jpg"/>
      //   <NavigationItem text='Sky' imageSource="resources/images/billy-huynh-v9bnfMCyKbg-unsplash.jpg"/>
      //   <NavigationItem text='Desert' imageSource="resources/images/neonbrand-C8HVCiuu8c0-unsplash.jpg"/>
      // </div>
      

      <div style ={contentStyle}>
        {sectionId.map((value) => 
        <NavigationItem view={value} onClick={this.props.onNavigationItemClick}/>)}
      </div>
    )
  }
}
const contentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: "column",
  backgroundColor: '#2f4454',
 

}
export default HomeView

