import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
	<div className="info-box">
		<p className="font-medium sm:text-xl text-center">{text}</p>
		<Link to={link} className='neo-brutalism-white neo-btn'>
			{btnText}
			<img src={arrow} className='w-4 h-4 object-contain' alt="arrow" />
		</Link>
	</div>
)

const renderContent = {
	1: (
		<h1 className="max-w-xl sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
			Hi, I am <span className='font-semibold'>Shlomi</span> 👋
			<br />
			A senior full-stack web developer with a passion for creating beautiful and functional web applications.
		</h1>
	),
	2: (
		<InfoBox
			text="Worked with a variety of clients, from small businesses to large corporations, to create custom web applications that help them achieve their goals."
			link="/about"
			btnText="Would you like to know more?"
		/>
	),
	// 3: (
	// 	<InfoBox
	// 		text="Led multiple projects from concept to completion over the years. Curious? Check out my projects."
	// 		link="/projects"
	// 		btnText="Visit my portfolio"
	// 	/>
	// ),
	3: (
		<InfoBox
			text="I am always looking for new opportunities to collaborate on exciting projects. Let's talk about your next project!"
			link="/contact"
			btnText="Get in touch"
		/>
	)
}

export const HomeInfo = ({ currentStage }) => {
	return renderContent[currentStage] || null
}
