import React from "react";
import NavigationItem from "./navigationitem"

class HomeView extends React.Component {
  render() {
    return (
      <div style ={contentStyle}>
        <NavigationItem text='Forrest' imageSource="resources/images/sebastian-unrau-sp-p7uuT0tw-unsplash.jpg"/>
        <NavigationItem text='Sky' imageSource="resources/images/billy-huynh-v9bnfMCyKbg-unsplash.jpg"/>
        <NavigationItem text='Desert' imageSource="resources/images/neonbrand-C8HVCiuu8c0-unsplash.jpg"/>
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