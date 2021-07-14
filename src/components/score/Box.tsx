import React from 'react';
import styled from 'styled-components';
import BoxBody from './BoxBody';
import BoxFooter from './BoxFooter';
import BoxTitle from './BoxTitle';

const Box = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
    min-width: 220px;
    max-width: 280px;
    box-shadow: 0px 4px 13px 0px rgba(48, 26, 74, 0.63);
    -webkit-box-shadow: 0px 4px 13px 0px rgba(48, 26, 74, 0.63);
    float: right;
    position: relative;
    top: 12em;
    right: 2em;
`;

interface Props {
    title: string,
    itens: any, 
    footerText: string
}

const ScoreBox: React.FC<Props> = (props: Props) => {
    return (
        <Box>
            <BoxTitle title={props.title}/>
            <BoxBody itens={props.itens}/>
            <BoxFooter text={props.footerText}/>
        </Box>
    )
}

export default ScoreBox;