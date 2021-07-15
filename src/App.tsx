import React from 'react'
import Map from './components/map'
import GameProvider from './providers/game'

function App() {
		
	return (
		<GameProvider>
			<Map />
		</GameProvider>
	)
}

export default App