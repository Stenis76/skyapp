import React, { CSSProperties } from 'react';
import { fullscreenAbsolute } from '../../css';
import {RouteComponentProps} from 'react-router-dom'

interface Props extends RouteComponentProps {
}

export default function DetailView(props: Props) {
    
    const imageSrc = `../assets/${props.location.pathname}.jpg`;

    return (
        <div style={container}>
             <img src={imageSrc} style={fullscreenAbsolute}/>
        </div>
    );
}
    
const container: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%'
}