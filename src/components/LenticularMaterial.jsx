import { extend } from '@react-three/fiber';
import { MeshStandardNodeMaterial } from 'three/webgpu';

extend({
	MeshStandardNodeMaterial,
});

export const LenticularMaterial = () => {
	return <meshStandardNodeMaterial color='pink' />;
};
