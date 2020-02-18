import React from "react";
import SectionItem from "./sectionitem"

class Content extends React.Component {
  render() {
    return (
      <div style ={contentStyle}>
        <SectionItem text='Forrest' imageSource="resources/images/sebastian-unrau-sp-p7uuT0tw-unsplash.jpg"/>
        <SectionItem text='Sky' imageSource="resources/images/billy-huynh-v9bnfMCyKbg-unsplash.jpg"/>
        <SectionItem text='Desert' imageSource="resources/images/neonbrand-C8HVCiuu8c0-unsplash.jpg"/>
      </div>
    )
  }
}
const contentStyle: React.CSSProperties = {
  height: '90%',
  width: '100vw',
  backgroundColor: '#2f4454',
 

}
export default Content