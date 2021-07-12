import React from 'react'
import styled from "styled-components"

const Div = styled.div`
    position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: white;
	font-size: 10px;
`;

interface PropsType {
    gameOver: boolean;
    score: number;    
}
 
const Player:  React.FC<PropsType> = (props: PropsType) => {
    const [value, setValue] = React.useState('Player');
    
    const onChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        localStorage.setItem('playerName', JSON.stringify(event.target.value)); 
        setValue(event.target.value);
    };    

    if ((props.gameOver) && (props.score > Number(localStorage.getItem("snakeScore"))))
        return (
            <Div>
                <h2>Player! Put your name!</h2> 
                <input value={value} type="text" onChange={onChange} />      
            </Div>
        );
    
    
    return <></>
};
 
export default Player;