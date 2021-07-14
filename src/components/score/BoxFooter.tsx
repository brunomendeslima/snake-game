import React from 'react';

interface Props {
    text: string
}

const BoxFooter: React.FC<Props> = (props: Props) => {
    return (
        <h3>{props.text}</h3>
    )
}

export default BoxFooter;