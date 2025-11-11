import { useRef, useState } from "react";
import { useGLTF, useAnimations, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'

export default function Character({ controls, openModal, checkDoorTrigger }) {
    const body = useRef();
    const [subscribeKeys, getKeys] = useKeyboardControls();
    const { scene, animations } = useGLTF('/character2.glb');

    const { actions } = useAnimations(animations, scene);

    const [smoothedCameraPosition] = useState(() => new THREE.Vector3(10, 10, 10))
    const [smoothedCameraTarget] = useState(() => new THREE.Vector3())

    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    useFrame((state, delta) => {
        if (!body.current) return;
        if (openModal) {
            actions['Armaturerun_R_necromancer'].stop();
            actions['Armatureblocking_loop_necromancer'].play();
            actions['Armatureidle_necromancer'].stop();
            return;
        }
        let { forward, backward } = getKeys();

        forward = forward || controls.forward;
        backward = backward || controls.backward;

        const speed = 2 * delta;

        const positionX = body.current.position.x + (forward ? speed : backward ? -speed : 0);

        if (!(positionX < -0.8 || positionX > 26)) body.current.position.x = positionX;

        if (actions && (forward || backward)) {

            actions['Armatureidle_necromancer'].stop();
            actions['Armaturerun_R_necromancer'].play();
            actions['Armatureblocking_loop_necromancer'].stop();
        } else {
            actions['Armaturerun_R_necromancer'].stop();
            actions['Armatureidle_necromancer'].play();
            actions['Armatureblocking_loop_necromancer'].stop();
        }

        let rotationY = Math.PI * 3 / 2;
        if (backward) rotationY *= -1;
        body.current.rotation.y = rotationY

        checkDoorTrigger(body.current.position.x);

        /**
         * Camera
         */

        const cameraPosition = new THREE.Vector3()
        cameraPosition.copy(body.current.position)
        cameraPosition.x += 1
        cameraPosition.z += 2.2
        cameraPosition.y += 1

        const cameraTarget = new THREE.Vector3()
        cameraTarget.copy(body.current.position)
        cameraTarget.x += 0.5
        cameraTarget.y += 0.65

        smoothedCameraPosition.lerp(cameraPosition, 5 * delta)
        smoothedCameraTarget.lerp(cameraTarget, 5 * delta)

        state.camera.position.copy(cameraPosition)
        state.camera.lookAt(cameraTarget)

    });

    return (
        <>
            <primitive
                ref={body}
                object={scene}
                scale={0.6}
                position={[0.3, 0, 0]}
                rotation-y={Math.PI * 3 / 2}
                castShadow
            />
        </>
    );
}

