import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';

import { useState } from 'react';
import { WebGPURenderer } from 'three/webgpu';

function App() {
	const [frameloop, setFrameloop] = useState('never');
	return (
		<div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
			{/* Pokeball image in top left */}
			<div
				style={{
					position: 'absolute',
					top: '20px',
					left: '20px',
					zIndex: 1000,
					width: '60px',
					height: '60px',
					background: 'white',
					borderRadius: '50%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
					border: '3px solid #000',
				}}
			>
				<div
					style={{
						width: '50px',
						height: '50px',
						background:
							'linear-gradient(180deg, #ff0000 0%, #ff0000 45%, #000 45%, #000 55%, #fff 55%, #fff 100%)',
						borderRadius: '50%',
						position: 'relative',
					}}
				>
					<div
						style={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							width: '16px',
							height: '16px',
							background: 'white',
							borderRadius: '50%',
							border: '2px solid #000',
						}}
					>
						<div
							style={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -50%)',
								width: '6px',
								height: '6px',
								background: '#ccc',
								borderRadius: '50%',
							}}
						/>
					</div>
				</div>
			</div>
			<Canvas
				shadows
				camera={{ position: [3, 3, 3], fov: 30 }}
				frameloop={frameloop}
				gl={canvas => {
					const renderer = new WebGPURenderer({
						canvas,
						powerPreference: 'high-performance',
						antialias: true,
						alpha: false,
						stencil: false,
						shadowMap: true,
					});
					renderer.init().then(() => {
						setFrameloop('always');
					});
					return renderer;
				}}
			>
				<color attach='background' args={['#fff000']} />
				<Experience />
			</Canvas>
		</div>
	);
}

export default App;
