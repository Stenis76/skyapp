import React from 'react' 
import HomeView from "./homeview";
import DetailView from "./detailview"

interface Props {
  view: "main" | "forest" | "sky" | "desert"
}
export class ViewContainer extends React.Component<Props> {
 
  render () {
    if (this.props.view === 'main') {
      return <HomeView view={this.props.view}/>
    }
    return (
      <DetailView />
    )
  }

}

