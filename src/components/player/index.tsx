import React from 'react'
import styled from "styled-components"

const Div = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: white;
    padding-top: 2em;
`;

const Input = styled.input`
    font-family: 'Press Start 2P', cursive;
    width: 40%;
    align-self: center;
    font-size: 20px;    
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

    if (props.gameOver)
        return (
            <Div>
                <h3>Player! Put your name!</h3> 
                <Input value={value} type="text" onChange={onChange} />      
            </Div>
        );
    
    
    return <></>
};
 
export default Player;