import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import { Suspense, useRef, useState } from "react"

import { Loader } from '../components/Loader'

import { Fox } from '../models/Fox'
import { useAlert } from '../hooks/useAlert'
import { Alert } from '../components/Alert'

export const Contact = () => {
	const formRef = useRef(null)
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: ''
	})
	const [isLoading, setIsLoading] = useState(false)
	const [currentAnimation, setCurrentAnimation] = useState('idle')

	const { alert, showAlert, hideAlert } = useAlert()

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setIsLoading(true)
		setCurrentAnimation('hit')

		emailjs.send(
			import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
			import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
			{
				from_name: form.name,
				from_email: form.email,
				to_name: import.meta.env.VITE_APP_EMAILJS_TO_NAME,
				to_email: import.meta.env.VITE_APP_EMAILJS_TO_EMAIL,
				message: form.message
			},
			import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
		).then(() => {
			setIsLoading(false)
			showAlert({
				show: true,
				text: 'Your message has been sent successfully!',
				type: 'success'
			})

			setTimeout(() => {
				setCurrentAnimation('idle')
				setForm({
					name: '',
					email: '',
					message: ''
				})
				hideAlert()
			}, 3000)
		}).catch(() => {
			setIsLoading(false)
			setCurrentAnimation('idle')
			showAlert({
				show: true,
				text: 'An error occurred while sending your message. Please try again later.',
				type: 'danger'
			})
		})
	}
	const handleFocus = () => setCurrentAnimation('walk')
	const handleBlur = () => setCurrentAnimation('idle')

	return (
		<section className="relative flex lg:flex-row flex-col max-container">
			{alert.show && <Alert {...alert} />}
			<div className="flex-1 min-w-[50%] flex flex-col">
				<h1 className="head-text">
					Get in touch
				</h1>
				<form
					action=""
					className="w-full flex flex-col gap-7 mt-14"
					onSubmit={handleSubmit}
				>
					<label htmlFor="name" className="text-black-500 font-semibold">
						Name
						<input
							type="text"
							name="name"
							className="input"
							placeholder="John"
							value={form.name}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
							required
						/>
					</label>
					<label htmlFor="email" className="text-black-500 font-semibold">
						Email
						<input
							type="email"
							name="email"
							className="input"
							placeholder="john@gmail.com"
							value={form.email}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
							required
						/>
					</label>
					<label htmlFor="message" className="text-black-500 font-semibold">
						Your message
						<textarea
							rows={4}
							name="message"
							className="input"
							placeholder="Let me know how I can help you"
							value={form.message}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
							required
						/>
					</label>
					<button
						type="submit"
						className="btn"
						onFocus={handleFocus}
						onBlur={handleBlur}
						disabled={isLoading}
					>
						{isLoading ? 'Sending...' : 'Send message'}
					</button>
				</form>
			</div>
			<div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
				<Canvas
					camera={{
						position: [0, 0, 5],
						fov: 75,
						near: 0.1,
						far: 1000
					}}
				>
					<directionalLight intensity={2.5} position={[0, 0, 1]} />
					<ambientLight intensity={0.5} />
					<Suspense fallback={<Loader />}>
						<Fox
							currentAnimation={currentAnimation}
							position={[0.5, 0.35, 0]}
							rotation={[12.6, -0.6, 0]}
							scale={[0.5, 0.5, 0.5]}
						/>
					</Suspense>
				</Canvas>
			</div>
		</section >
	)
}