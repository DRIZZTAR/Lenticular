import {
	Environment,
	OrbitControls,
	useTexture,
	useVideoTexture,
	RoundedBox,
	Float,
} from '@react-three/drei';
import { useControls } from 'leva';
import { LenticularMaterial } from './LenticularMaterial';

export const Experience = () => {
	const { textureSet, nbDivisions, height } = useControls({
		textureSet: {
			value: 'evil-angel',
			options: ['evil-angel', 'charmander-squirtle', 'mathematics-twerk'],
		},
		nbDivisions: {
			min: 10,
			max: 90,
			value: 90,
			step: 10,
			label: 'Number of Divisions',
		},
		height: {
			min: 0.001,
			max: 0.2,
			value: 0.05,
			step: 0.001,
			label: 'Height',
		},
	});

	const videoA = useVideoTexture(
		'textures/mathematics-twerk/twerk-course.mp4'
	);
	const videoB = useVideoTexture(
		'textures/mathematics-twerk/mathematics-numbers.mp4'
	);

	const textureEvilAngelA = useTexture('textures/evil-angel/evil.png');
	const textureEvilAngelB = useTexture('textures/evil-angel/angel.png');

	const texturePokemonA = useTexture(
		'textures/charmander-squirtle/charmander.png'
	);
	const texturePokemonB = useTexture(
		'textures/charmander-squirtle/squirtle.png'
	);

	const textureA = {
		['evil-angel']: textureEvilAngelA,
		['charmander-squirtle']: texturePokemonA,
		['mathematics-twerk']: videoA,
	}[textureSet];

	const textureB = {
		['evil-angel']: textureEvilAngelB,
		['charmander-squirtle']: texturePokemonB,
		['mathematics-twerk']: videoB,
	}[textureSet];

	return (
		<>
			<OrbitControls />
			<Environment
				preset='apartment'
				background={false}
				backgroundBlurriness={0.5}
			/>
			<Float>
				<mesh>
					<planeGeometry args={[1, 1.4, nbDivisions * 2, 1]} />
					<LenticularMaterial
						key={textureSet}
						textureA={textureA}
						textureB={textureB}
						nbDivisions={nbDivisions}
						height={height}
					/>
				</mesh>
			</Float>
		</>
	);
};
