import { useEffect } from "react"
import { useGame } from "../providers/game"

const useSpeed = () => {
	const { score, delay, setDelay } = useGame()
    
    useEffect(
		() => {
			if((score > 0) && (score % 3 === 0)){
				
                if (delay == null) 
                    return

				setDelay(delay - 10)
			}
			console.log(delay)
		},
		[score]
	)    	
}

export default useSpeed