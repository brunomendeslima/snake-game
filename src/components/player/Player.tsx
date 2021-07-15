import React from 'react'
import styled from "styled-components"
import Diskette from "../../assets/diskette.png"
import ScoresService from '../../services/scores-service';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: white;
    padding-top: 2em;
    text-align: center;
`;

const DivImage = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: row;
`;

const Input = styled.input`
    font-family: 'Press Start 2P', cursive;
    width: 40%;
    font-size: 20px;    
`;
    
const Img = styled.img`
    width: 40px;
    height: 40px;
`;

const Spacer = styled.div`
    padding: 0.3em;
`;

interface PropsType {
    score: number;    
}
 
const Player:  React.FC<PropsType> = (props: PropsType) => {
    const [value, setValue] = React.useState('Player');
    
    const onChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        localStorage.setItem('playerName', JSON.stringify(event.target.value)); 
        setValue(event.target.value);
    };

    const onSaveClick = () => {
        let newScore = {name: value, points: props.score};
        ScoresService.insertScore(newScore);
    };
    
    return (
        <Div>
            <h3>Player! Put your name!</h3> 
            <DivImage>
                <Input value={value} type="text" onChange={onChange} />
                <Spacer />
                <Img src={Diskette} onClick={onSaveClick}/>
            </DivImage>
        </Div>
    ); 
        
};
 
export default Player;