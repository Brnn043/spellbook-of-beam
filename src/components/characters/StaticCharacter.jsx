import { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Character({ position, rotation }) {
    const body = useRef();
    const { scene, animations } = useGLTF('/character2.glb');

    const { actions } = useAnimations(animations, scene);

    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }

        actions['Armatureidle_necromancer'].play();
    });

    useFrame((state, delta) => {
        if (!body.current) return;
    });

    return (
        <>
            <primitive
                ref={body}
                object={scene}
                scale={0.9}
                position={position}
                rotation={rotation}
                castShadow
            />
        </>
    );
}

