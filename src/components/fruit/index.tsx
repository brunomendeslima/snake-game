import React from "react"
import AppleLogo from '../../assets/applePixels.png'
import styled from 'styled-components';

const Img = styled.img`
    display: none;
` 

const Fruit: React.FC = (props) => {   
               
    return (        
        <Img id="fruit" src={AppleLogo} alt="fruit" width="30" />      
    )
        
}

export default Fruit