import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface GameContextProps {
    gameOver: boolean,
    setGameOver: Dispatch<SetStateAction<boolean>>
}

const GameContext = createContext({} as GameContextProps);

const GameProvider: React.FC = ({children}) => {
    const [gameOver, setGameOver] = useState(false);

    return (
        <GameContext.Provider value={{gameOver, setGameOver}}>
            {children}
        </GameContext.Provider>
    )
}

export function useGame() {
    return useContext(GameContext);
}

export default GameProvider;