/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import './App.css'
import { useTelegram } from './hooks/useTelegram'
import { AppRouter } from './AppRouter'

export const App: React.FC = () => {
	const { tg } = useTelegram()

	useEffect(() => {
		tg.ready()
	}, [])

	return (
		<div className='App'>
			<AppRouter />
		</div>
	)
}

export default App
