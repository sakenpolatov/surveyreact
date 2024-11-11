import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Result {
	question: string
	userAnswer: string
	correctAnswer: string
	isCorrect: boolean
}

interface SurveyState {
	results: Result[]
	correctCount: number
	isCompleted: boolean
	showSurvey: boolean
}

const initialState: SurveyState = {
	results: [],
	correctCount: 0,
	isCompleted: false,
	showSurvey: true
}

const surveySlice = createSlice({
	name: 'survey',
	initialState,
	reducers: {
		setResults: (
			state,
			action: PayloadAction<{ results: Result[]; correctCount: number }>
		) => {
			state.results = action.payload.results
			state.correctCount = action.payload.correctCount
			state.isCompleted = true
			state.showSurvey = false
		},
		resetSurvey: state => {
			state.results = []
			state.correctCount = 0
			state.isCompleted = false
			state.showSurvey = true
		},
		toggleShowSurvey: state => {
			state.showSurvey = !state.showSurvey
		}
	}
})

export const { setResults, resetSurvey, toggleShowSurvey } = surveySlice.actions
export default surveySlice.reducer
