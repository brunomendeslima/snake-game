import React, { useEffect, useRef, useState } from 'react'
import "../../App.css"
import Fruit from '../fruit'
import OldMonitor from '../oldmonitor'
import useInterval from "./useInterval"
import GameOver from "../gameover";
import Snake from "../snake"
import Player from "../player/Player"
import useScores from '../../hooks/useScores'
import ScoreBox from '../score/Box'
import PlayButton from '../play/PlayButton'
import { useGame } from '../../providers/game'

const canvasX = 1000
const canvasY = 1000
const initialSnake = [[4, 10], [4, 10]]
const initialApple = [14, 10]
const scale = 50
let timeDelay = 150

const Map = () => {

	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const [snake, setSnake] = useState(initialSnake)
	const [apple, setApple] = useState(initialApple)
	const [direction, setDirection] = useState([0, -1])
	const [eixoDirection, setEixoDirection] = useState('')
	const [delay, setDelay] = useState<number | null>(null)
	const { gameOver, setGameOver } = useGame();
	const [score, setScore] = useState(0)
	
	useInterval(() => runGame(), delay)

	useEffect(
		() => {
			let fruit = document.getElementById("fruit") as HTMLCanvasElement
			if (canvasRef.current) {
				const canvas = canvasRef.current
				const ctx = canvas.getContext("2d")
				if (ctx) {
					ctx.setTransform(scale, 0, 0, scale, 0, 0)
					ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
					ctx.fillStyle = "#a3d001"
					snake.forEach(([x, y]) => ctx.fillRect(x, y, 1, 1))
					ctx.drawImage(fruit, apple[0], apple[1], 1, 1)
				}
			}			

		},
		[snake, apple, gameOver]
	)

	useEffect(
		() => {
			if((score > 0) && (score % 5 === 0)){
				timeDelay = timeDelay - 10
				setDelay(timeDelay)
			}
			console.log(timeDelay)
		},
		[score]
	)

	const play = () => {
		setSnake(initialSnake)
		setApple(initialApple)
		setDirection([1, 0])
		timeDelay = 150
		setDelay(timeDelay)
		setScore(0)
		setGameOver(false)
	}

	const checkCollision = (head: number[]) => {
		for (let i = 0; i < head.length; i++) {
			if (head[i] < 0 || head[i] * scale >= canvasX) return true
		}
		for (const s of snake) {
			if (head[0] === s[0] && head[1] === s[1]) return true
		}
		return false
	}

	const appleAte = (newSnake: number[][]) => {
		let coord = apple.map(() => Math.floor(Math.random() * canvasX / scale))
		if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
			let newApple = coord
			setScore(score + 1)
			setApple(newApple)
			return true
		}
		return false
	}

	const runGame = () => {
		const newSnake = [...snake]
		const newSnakeHead = [newSnake[0][0] + direction[0], newSnake[0][1] + direction[1]]
		newSnake.unshift(newSnakeHead)
		if (checkCollision(newSnakeHead)) {
			setDelay(null)
			setGameOver(true)			
		}
		if (!appleAte(newSnake)) {
			newSnake.pop()
		}
		setSnake(newSnake)	
	}

	const changeDirection = (e: React.KeyboardEvent<HTMLDivElement>) => {
		switch (e.key) {
			case "ArrowLeft":
				if (eixoDirection === 'x')
					break;

				setDirection([-1, 0])
				setEixoDirection("x")
				break
			case "ArrowUp":
				if (eixoDirection === 'y')
					break;

				setDirection([0, -1])
				setEixoDirection("y")
				break
			case "ArrowRight":
				if (eixoDirection === 'x')
					break;

				setDirection([1, 0])
				setEixoDirection("x")
				break
			case "ArrowDown":
				if (eixoDirection === 'y')
					break;

				setDirection([0, 1])
				setEixoDirection("y")
				break
		}
	}

	const { scores } = useScores();
	const footerText = `Score: ${score}`

	return (
		<div onKeyDown={(e) => changeDirection(e)}>
			<OldMonitor />
			{!gameOver ? (
				<>
					<Snake canvasRef={canvasRef} canvasX={canvasX} canvasY={canvasY} />
					<Fruit />
				</>
			) : (
				<>
					<GameOver />
					<Player score={score} />
				</>
			)}
			<PlayButton onClick={play} />
			<ScoreBox title="Ranking" itens={scores} footerText={footerText} />
		</div>
	)
}

export default Map