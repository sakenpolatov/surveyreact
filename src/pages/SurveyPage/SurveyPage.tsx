import React from 'react'
import styles from './surveypage.module.scss'
import SurveyForm from '../../components/SurveyForm/SurveyForm'

export const SurveyPage: React.FC = () => {
	return (
		<div className={styles.container}>
			<h1>SurveyPage</h1>
			<SurveyForm />
		</div>
	)
}
