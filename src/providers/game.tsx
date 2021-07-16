import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface GameContextProps {
    gameOver: boolean,
    setGameOver: Dispatch<SetStateAction<boolean>>,
    score: number,
    setScore: Dispatch<SetStateAction<number>>
    delay: number | null,
    setDelay: Dispatch<SetStateAction<number | null>>
}

const GameContext = createContext({} as GameContextProps);

const GameProvider: React.FC = ({children}) => {
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0)
    const [delay, setDelay] = useState<number | null>(null)

    const retorno = {
        gameOver, setGameOver,
        score, setScore,
        delay, setDelay
    }

    return (
        <GameContext.Provider value={retorno}>
            {children}
        </GameContext.Provider>
    )
}

export function useGame() {
    return useContext(GameContext);
}

export default GameProvider;