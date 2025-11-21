import { useRef, useEffect, Suspense, useContext, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import Bedroom from '@/components/profile/Bedroom';
import PotionRoom from '@/components/project/PotionRoom';
import ExploreRoom from '@/components/activity/ExploreRoom';
import Character from '@/components/characters/StaticCharacter';
import { CameraContext } from './page';

// Main Experience Component
export default function Experience() {
    const groupRef = useRef();
    const bedroomRef = useRef();
    const characterRef = useRef();
    const potionRoomRef = useRef();
    const exploreRoomRef = useRef();
    const { camera } = useThree();
    const { cameraY } = useContext(CameraContext);
    const [activeModel, setActiveModel] = useState(null);

    // Determine which model is in view based on camera Y position
    useEffect(() => {
        if (cameraY >= 15) {
            setActiveModel('bedroom');
        } else if (cameraY >= 5 && cameraY < 15) {
            setActiveModel('character');
        } else if (cameraY >= -5 && cameraY < 5) {
            setActiveModel('potion');
        } else if (cameraY < -5) {
            setActiveModel('explore');
        }
    }, [cameraY]);

    // Update camera position every frame based on context
    useFrame((state, delta) => {
        // Smooth camera movement with lerp
        camera.position.x = -2;
        camera.position.y += (cameraY - camera.position.y) * 0.05;
        camera.position.z = 8;

        // Tilt camera to look at the models
        camera.rotation.x = -0.1;
        camera.rotation.y = 0;
        camera.rotation.z = 0;

        // Animate bedroom - rotate slowly when in view
        if (bedroomRef.current && activeModel === 'bedroom') {
            bedroomRef.current.rotation.y += delta * 0.3;
        }

        // Animate character - rotate and bob when in view
        if (characterRef.current && activeModel === 'character') {
            characterRef.current.rotation.y += delta * 0.5;
        }

        // Animate potion room - rotate slowly when in view
        if (potionRoomRef.current && activeModel === 'potion') {
            potionRoomRef.current.rotation.y += delta * 0.3;
        }

        // Animate explore room - rotate slowly when in view
        if (exploreRoomRef.current && activeModel === 'explore') {
            exploreRoomRef.current.rotation.y += delta * 0.3;
        }
    }); return (
        <>
            {/* Pastel gradient background color */}
            <color attach="background" args={['#e8dff5']} />

            {/* Lighting */}
            <ambientLight intensity={0.8} />
            <directionalLight
                position={[10, 10, 5]}
                intensity={1.5}
                castShadow
            />
            <pointLight position={[-10, 5, -5]} intensity={0.6} color="#FFB6C1" />
            <pointLight position={[10, -5, -5]} intensity={0.6} color="#DDA0DD" />

            {/* Main group of 3D Models arranged vertically */}
            <group ref={groupRef}>
                {/* Bedroom - Top section (Around Y=15) - Position on the RIGHT */}
                <Suspense fallback={null}>
                    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
                        <group ref={bedroomRef} position={[-4.5, 17.5, 0]} scale={0.8} rotation={[0, -Math.PI * 0.25, 0]}>
                            <Bedroom />
                        </group>
                    </Float>
                </Suspense>

                {/* Character - Upper-middle section (Around Y=8) - Position on the RIGHT */}
                <Suspense fallback={null}>
                    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
                        <group ref={characterRef} position={[1, 8, 2]} scale={2} rotation={[0, Math.PI * 0.75, 0]}>
                            <Character />
                        </group>
                    </Float>
                </Suspense>

                {/* PotionRoom - Middle section (Around Y=0) - Position on the LEFT */}
                <Suspense fallback={null}>
                    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
                        <group ref={potionRoomRef} position={[-4.5, -2, 0]} scale={0.8} rotation={[0, -Math.PI * 0.1, 0]}>
                            <PotionRoom />
                        </group>
                    </Float>
                </Suspense>

                {/* ExploreRoom - Bottom section (Around Y=-10) - Position on the RIGHT */}
                <Suspense fallback={null}>
                    <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.4}>
                        <group ref={exploreRoomRef} position={[0.5, -12, 0]} scale={0.8} rotation={[0, -Math.PI * 0.4, 0]}>
                            <ExploreRoom />
                        </group>
                    </Float>
                </Suspense>
            </group>
        </>
    );
}