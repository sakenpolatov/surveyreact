import React, { useCallback, useEffect, useState } from 'react'
import { Survey } from 'survey-react-ui'
import { Model, SurveyModel, ItemValue } from 'survey-core' // Импорт ItemValue
import 'survey-core/defaultV2.min.css'

const SurveyForm: React.FC = () => {
	const [survey, setSurvey] = useState<SurveyModel | null>(null)

	useEffect(() => {
		fetch('/questions.json')
			.then(response => response.json())
			.then(data => {
				const surveyModel = new Model(data)
				setSurvey(surveyModel)
			})
			.catch(error => {
				console.error('Error loading questions:', error)
			})
	}, [])

	const alertResults = useCallback((sender: SurveyModel) => {
		const userAnswers = sender.data
		const results = sender.getAllQuestions().map(question => {
			const correctAnswer = question['correctAnswer']
			const userAnswer = userAnswers[question.name]
			const isCorrect = userAnswer === correctAnswer

			return {
				question: question.title,
				userAnswer: question.choices.find(
					(choice: ItemValue) => choice.value === userAnswer
				)?.text,
				correctAnswer: question.choices.find(
					(choice: ItemValue) => choice.value === correctAnswer
				)?.text,
				isCorrect
			}
		})

		alert(JSON.stringify(results, null, 2))
	}, [])

	useEffect(() => {
		if (survey) {
			survey.onComplete.add(alertResults)
		}
	}, [survey, alertResults])

	return survey ? <Survey model={survey} /> : <div>Loading...</div>
}

export default SurveyForm
