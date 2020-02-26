import React from "react";

interface Props {
  text: string
  imageSource: string
}

class NavigationItem extends React.Component<Props> {
  render() {
    return (
      <div style={sectionItemStyle}>
        <img style={imageStyle} src={this.props.imageSource} alt="NONONO"/>
    <h1 style= {textStyle} >{this.props.text}</h1>
      </div>
    )
  }
}
const sectionItemStyle: React.CSSProperties = {
  flexShrink: 1,
  position: 'relative',
  margin: '0.4rem',
  backgroundColor: '#2f4454',
}
const imageStyle: React.CSSProperties = {
  width: '100%',
  height: '30vh',
  objectFit: 'cover',
  backgroundColor: '#2f4454',
}
const textStyle: React.CSSProperties = {
 
zIndex: 100,
fontSize: '3rem',
color: 'grey',
 position: 'absolute',
 left: '50%',
 top: '50%',
 transform: 'translate(-50%, -50%)'
 

}


export default NavigationItem
