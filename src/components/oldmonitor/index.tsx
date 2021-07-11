import React from 'react';
import Monitor from '../../assets/oldMonitor.png';
import styled from 'styled-components';

const Img = styled.img`
    width: 800px;
	height: 800px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

const OldMonitor: React.FC = (props) => {         
        
    return (        
        <Img src={Monitor} alt="fruit" width="4000" className="monitor" />     
    )
        
}

export default OldMonitor