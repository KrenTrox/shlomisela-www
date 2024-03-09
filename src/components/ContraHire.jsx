import { useEffect, useRef } from 'react'

export const ContraHire = () => {
	const contraHireMeButton = useRef(null)

	useEffect(() => {
		const script = document.createElement('script')
		script.src = 'https://contra.com/static/embed/sdk.js'
		script.async = true
		document.body.appendChild(script)
	}, [])

	return (
		<>
			<div ref={contraHireMeButton} className="contra-hire-me-button" data-analyticsUserId={import.meta.env.VITE_APP_CONTRA_ANALYTICSUSERID} data-theme="light" data-username={import.meta.env.VITE_APP_CONTRA_USERNAME}></div>
		</>
	)
}
