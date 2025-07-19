import { extend } from '@react-three/fiber';
import { useMemo } from 'react';
import { color, mix, uv, texture } from 'three/tsl';
import { MeshStandardNodeMaterial } from 'three/webgpu';

extend({
	MeshStandardNodeMaterial,
});

export const LenticularMaterial = ({
  textureA,
  textureB,
}) => {
	const { nodes, uniforms } = useMemo(() => {
		const uniforms = {};
    const texA = texture(textureA);
    const texB = texture(textureB);
		return {
			uniforms,
			nodes: {
				colorNode: mix(texA, texB, uv().x),
			},
		};
	}, []);

	return <meshStandardNodeMaterial {...nodes} />;
};
