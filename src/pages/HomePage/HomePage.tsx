import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HomePage: React.FC = () => {
	const navigate = useNavigate()

	const handleNavigate = () => {
		navigate('/survey')
	}

	return (
		<div>
			<h1>HomePage</h1>
			<button onClick={handleNavigate}>перейти к опросу</button>
		</div>
	)
}
