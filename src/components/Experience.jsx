import { OrbitControls, Environment } from '@react-three/drei';
import { LenticularMaterial } from './LenticularMaterial';

export const Experience = () => {
	return (
		<>
			<OrbitControls />
			<Environment preset='sunset' />
			<mesh>
				<planeGeometry args={[1, 1]} />
				<LenticularMaterial />
			</mesh>
		</>
	);
};
