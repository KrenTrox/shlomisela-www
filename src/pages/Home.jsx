import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useEffect, useRef } from 'react'
import { Loader } from '../components/Loader'
import { Bird } from '../models/Bird'
import { Island } from '../models/Island'
import { Plane } from '../models/Plane'
import { Sky } from '../models/Sky'
import { HomeInfo } from '../components/HomeInfo'

import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'

export const Home = () => {
	const audioRef = useRef(new Audio(sakura));
	audioRef.current.volume = 0.4;
	audioRef.current.loop = true;
	const [isRotating, setIsRotating] = useState(false);
	const [currentStage, setCurrentStage] = useState(1);
	const [isAudioPlaying, setIsAudioPlaying] = useState(false);

	useEffect(() => {
		if (isAudioPlaying) {
			audioRef.current.play();
		}

		return () => {
			audioRef.current.pause();
		}
	}, [isAudioPlaying]);

	const adjustIslandForScreenSize = () => {
		let screenScale = null;
		let screenPosition = [0, -6.5, -43];
		let rotation = [0.1, 4.7, 0];

		screenScale = [1, 1, 1];

		if (window.innerWidth < 768) {
			screenScale = [0.9, 0.9, 0.9];
		}

		return [screenScale, screenPosition, rotation];
	}

	const adjustPlaneForScreenSize = () => {
		let screenScale, screenPosition

		screenScale = [3, 3, 3];
		screenPosition = [0, -4, -4];

		if (window.innerWidth < 768) {
			screenScale = [1.5, 1.5, 1.5];
			screenPosition = [0, -1.5, 0];
		}

		return [screenScale, screenPosition];
	}

	const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
	const [planeScale, planePosition] = adjustPlaneForScreenSize();

	return (
		<section className="w-screen h-screen relative">
			<div className="absolute top-28 start-0 end-0 z-10 grid place-items-center">
				{currentStage && <HomeInfo currentStage={currentStage} />}
			</div>

			<Canvas
				className={`w-screen h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
				camera={{ near: 0.1, far: 1000 }}
			>
				<Suspense fallback={<Loader />}>
					<directionalLight position={[1, 1, 1]} intensity={2} />
					<ambientLight intensity={0.5} />
					<hemisphereLight skyColor="#b1e1ff" groundColor="#000" intensity={1} />

					<Bird />
					<Sky isRotating={isRotating} />
					<Island
						position={islandPosition}
						scale={islandScale}
						rotation={islandRotation}
						isRotating={isRotating}
						setIsRotating={setIsRotating}
						setCurrentStage={setCurrentStage}
					/>
					<Plane
						scale={planeScale}
						position={planePosition}
						isRotating={isRotating}
						rotation={[0, 20, 0]}
					/>
				</Suspense>
			</Canvas>

			<div className='absolute bottom-2 left-2'>
				<img
					src={!isAudioPlaying ? soundoff : soundon}
					alt='jukebox'
					onClick={() => setIsAudioPlaying(!isAudioPlaying)}
					className='w-10 h-10 cursor-pointer object-contain'
				/>
			</div>
		</section>
	)
}