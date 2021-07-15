import React, { MouseEventHandler } from "react";
import styled from "styled-components";

const Button = styled.button`
    position: fixed;
	top: 80%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: white;
	background: #502c7b;
	border: 2px solid white;
	padding: 10px;
	font-size: 0.9em;
	color: white;
	box-shadow: 4px 4px 0px 0px white;
	font-family: 'Press Start 2P', cursive;
	font-weight: 700;
	letter-spacing: 5px;
	text-transform: uppercase;
`;

interface Props {
    onClick: MouseEventHandler
}

const PlayButton: React.FC<Props> = (props: Props) => {
    return (
        <Button onClick={props.onClick}>
            Play
        </Button>
    )
}

export default PlayButton;
