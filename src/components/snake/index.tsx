import React from "react";
import styled from 'styled-components';

const Canvas = styled.canvas`
    border: 5px solid transparent;
	width: 585px;
	height: 440px;
	position: fixed;
	top: 43.2%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

interface PropsType {
    canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
    canvasX: number,
    canvasY: number
}

const Snake: React.FC<PropsType> = (props) => {
        
    return <Canvas ref={props.canvasRef} width={`${props.canvasX}px`} height={`${props.canvasY}px`} />
}

export default Snake;