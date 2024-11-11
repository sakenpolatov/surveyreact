import React from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { resetSurvey } from '../../redux/slices/surveySlice'
import styles from './result.module.scss'

export const ResultSurvey: React.FC = () => {
	const { results, correctCount } = useAppSelector(state => state.survey)
	const dispatch = useAppDispatch()
	const isPerfectScore = correctCount === results.length

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2 className={styles.header}>Результаты:</h2>
				<p
					className={`${styles.correctCount} ${
						isPerfectScore ? '' : styles.incorrect
					}`}
				>
					Правильных ответов: {correctCount}/{results.length}
				</p>
				<button
					className={styles.retryButton}
					onClick={() => {
						dispatch(resetSurvey())
					}}
				>
					Retry
				</button>
				<ul className={styles.resultsList}>
					{results.map((result, index) => (
						<li key={index} className={styles.resultItem}>
							<div className={styles.question}>
								{index + 1}. {result.question}
							</div>
							<div className={styles.answer}>
								<span>Ваш ответ: </span>
								<span className={styles.userAnswer}>{result.userAnswer}</span>
							</div>
							<div className={styles.answer}>
								<span>Правильный ответ: </span>
								<span className={styles.correctAnswer}>
									{result.correctAnswer}
								</span>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
