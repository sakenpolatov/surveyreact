import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './homepage.module.scss'

export const HomePage: React.FC = () => {
	const navigate = useNavigate()

	const handleNavigate = () => {
		navigate('/survey')
	}

	return (
		<div className={styles.container}>
			<h1>HomePage</h1>
			<button onClick={handleNavigate} className={styles.button}>
				Перейти к опросу
			</button>
		</div>
	)
}
