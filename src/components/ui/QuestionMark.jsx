import React, { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

export const QuestionMark = ({ position, setOpen, title = null }) => {
    const { camera } = useThree();
    const questionMarkRef = useRef();
    const textRef = useRef();
    const materialRef = useRef();

    useFrame(() => {
        if (questionMarkRef.current) {
            questionMarkRef.current.lookAt(camera.position);
        }
        if (textRef.current) {
            textRef.current.lookAt(camera.position);
        }
    });

    const handleClick = () => {
        setOpen(true);
    };

    const handlePointerOver = (e) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
    };

    const handlePointerOut = (e) => {
        e.stopPropagation();
        document.body.style.cursor = "default";
    };

    return (
        <>
            <sprite
                ref={questionMarkRef}
                position={position}
                onClick={handleClick}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
                scale={0.6}
                renderOrder={1}
            >
                <spriteMaterial
                    ref={materialRef}
                    attach="material"
                    map={new THREE.TextureLoader().load("/question.webp")}
                    depthTest={false}
                />
            </sprite>

            {title && (
                <Text
                    ref={textRef}
                    position={[position[0], position[1] + 0.5, position[2]]} // Slightly above the question mark
                    fontSize={0.2}
                    color="#f3bfe1"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.02}
                    outlineColor='#372731'
                    depthTest={false}
                    renderOrder={1}
                    font="/fonts/PaytoneOne-Regular.ttf"
                    onClick={handleClick}
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                >
                    {title}
                </Text>
            )}
        </>
    );
};
