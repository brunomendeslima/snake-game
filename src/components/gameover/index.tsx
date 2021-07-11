import React from "react";
import styled from 'styled-components';

const Div = styled.div`
    position: fixed;
	top: 43.2%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: white;
	font-size: 35px;
`;

interface PropsType {
    gameOver: boolean;    
}

const GameOver: React.FC<PropsType> = (props) => {    
    
    if (props.gameOver) 
        return <Div className="gameOver">Game Over</Div>
                   
    return <></>
}

export default GameOver;