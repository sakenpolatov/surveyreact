import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SurveyPage } from '../pages/SurveyPage'
import { HomePage } from '../pages/HomePage'

export const AppRouter: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/survey' element={<SurveyPage />} />
			</Routes>
		</Router>
	)
}
