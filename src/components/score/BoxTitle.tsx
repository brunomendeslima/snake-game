import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
    text-decoration: underline;
`;

interface Props {
    title: string
}

const BoxTitle = (props: Props) => {
    return (
        <Title>{props.title}</Title>
    )
}

export default BoxTitle;
