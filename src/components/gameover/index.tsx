import React from "react";
import styled from "styled-components";

const Div = styled.div`
    position: fixed;
	top: 43.2%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: white;
	font-size: 35px;
`;

const GameOver: React.FC = () => {           
    return <Div>Game Over</Div>    
}

export default GameOver;