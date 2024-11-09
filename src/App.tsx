/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import './App.css'
import { useTelegram } from './hooks/useTelegram'

export const App = () => {
	const { tg } = useTelegram()
	useEffect(() => {
		tg.ready()
	}, [])

	return <div className='App'>домашняя страница</div>
}
