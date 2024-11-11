import React, { useCallback, useEffect, useState } from 'react'
import { Survey } from 'survey-react-ui'
import { Model, SurveyModel, ItemValue } from 'survey-core'
import 'survey-core/defaultV2.min.css'
import { useDispatch } from 'react-redux'
import { setResults } from '../../redux/slices/surveySlice'

const SurveyForm: React.FC = () => {
	const [survey, setSurvey] = useState<SurveyModel | null>(null)
	const dispatch = useDispatch()

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

	const handleSurveyComplete = useCallback(
		(sender: SurveyModel) => {
			const userAnswers = sender.data
			const results = sender.getAllQuestions().map(question => {
				const correctAnswer = question['correctAnswer']
				const userAnswer = userAnswers[question.name]
				const isCorrect = userAnswer === correctAnswer

				return {
					question: question.title,
					userAnswer:
						question.choices.find(
							(choice: ItemValue) => choice.value === userAnswer
						)?.text || 'Не ответил',
					correctAnswer: question.choices.find(
						(choice: ItemValue) => choice.value === correctAnswer
					)?.text,
					isCorrect
				}
			})

			const correctCount = results.filter(result => result.isCorrect).length
			dispatch(setResults({ results, correctCount }))
		},
		[dispatch]
	)

	useEffect(() => {
		if (survey) {
			survey.onComplete.add(handleSurveyComplete)
		}
	}, [survey, handleSurveyComplete])

	return survey ? <Survey model={survey} /> : <div>Loading...</div>
}

export default SurveyForm
