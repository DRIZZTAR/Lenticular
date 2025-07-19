import {
	OrbitControls,
	Environment,
	useVideoTexture,
	useTexture,
} from '@react-three/drei';
import { LenticularMaterial } from './LenticularMaterial';
import { useControls } from 'leva';

export const Experience = () => {
	const { textureSet } = useControls({
		textureSet: {
			value: 'charmander-squirtle',
			options: ['charmander-squirtle', 'white-stripes'],
		},
	});

	const videoA = useVideoTexture('textures/white-stripes/s.mp4');
	const videoB = useVideoTexture('textures/white-stripes/ws.mp4');

	const textureCharmanderSquirtleA = useTexture(
		'textures/charmander-squirtle/charmander.png'
	);
	const textureCharmanderSquirtleB = useTexture(
		'textures/charmander-squirtle/squirtle.png'
	);

	const textureA = {
		['charmander-squirtle']: textureCharmanderSquirtleA,
		['white-stripes']: videoA,
	}[textureSet];

	const textureB = {
		['charmander-squirtle']: textureCharmanderSquirtleB,
		['white-stripes']: videoB,
	}[textureSet];

	return (
		<>
			<OrbitControls />
			<Environment preset='sunset' />
			<mesh>
				<planeGeometry args={[1, 1]} />
				<LenticularMaterial
					key={textureSet}
					textureA={textureA}
					textureB={textureB}
				/>
			</mesh>
		</>
	);
};
