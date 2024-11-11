import React from 'react'
import SurveyForm from '../../components/SurveyForm/SurveyForm'
import { useAppSelector } from '../../redux/hooks'
import { ResultSurvey } from '../../components/ResultSurvey/ResultSurvey'
import styles from './surveypage.module.scss'

export const SurveyPage: React.FC = () => {
	const showSurvey = useAppSelector(state => state.survey.showSurvey)

	return (
		<div className={styles.container}>
			<h1>Survey Page</h1>
			{showSurvey ? <SurveyForm /> : <ResultSurvey />}
		</div>
	)
}
