import React from 'react';
import styled from 'styled-components';

const BoxBodyItem = styled.p`
    margin: 0.5em;
`;

interface Props {
    itens: any
}

const scoreItem = (score: any) => {
    return <BoxBodyItem>{score.name}: {score.points}</BoxBodyItem>
}

const BoxBody: React.FC<Props> = (props: Props) => {
    return (
        props.itens.map((score: any) => scoreItem(score))
    );
}

export default BoxBody;