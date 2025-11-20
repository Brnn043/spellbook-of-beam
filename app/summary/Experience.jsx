import { useRef, useEffect, Suspense, useContext } from 'react';
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
    const { camera } = useThree();
    const { cameraY } = useContext(CameraContext);

    // Update camera position every frame based on context
    useFrame(() => {
        // Smooth camera movement with lerp
        camera.position.x = 0;
        camera.position.y += (cameraY - camera.position.y) * 0.05; // Slower lerp for smoother movement
        camera.position.z = 8;

        // Tilt camera to look slightly down at the models
        camera.rotation.x = -0.2;
        camera.rotation.y = 0;
        camera.rotation.z = 0;

        console.log('Camera Y:', camera.position.y.toFixed(2), 'Target:', cameraY);
    }); return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.6} />
            <directionalLight
                position={[10, 10, 5]}
                intensity={1.2}
                castShadow
            />
            <pointLight position={[-10, 5, -5]} intensity={0.5} color="#8B5CF6" />
            <pointLight position={[10, -5, -5]} intensity={0.5} color="#EC4899" />

            {/* Stars background */}
            <Stars
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                saturation={0}
                fade={true}
                speed={0.5}
            />

            {/* Main group of 3D Models arranged vertically */}
            <group ref={groupRef}>
                {/* Bedroom - Top section (Around Y=15) */}
                <Suspense fallback={null}>
                    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
                        <group position={[0, 15, 0]} scale={0.8} rotation={[0, Math.PI * 0.25, 0]}>
                            <Bedroom />
                        </group>
                    </Float>
                </Suspense>

                {/* Character - Upper-middle section (Around Y=8) */}
                <Suspense fallback={null}>
                    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
                        <group position={[2, 8, 0]} scale={1} rotation={[0, Math.PI, 0]}>
                            <Character />
                        </group>
                    </Float>
                </Suspense>

                {/* PotionRoom - Middle section (Around Y=0) */}
                <Suspense fallback={null}>
                    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
                        <group position={[-1, 0, 0]} scale={0.8} rotation={[0, -Math.PI * 0.25, 0]}>
                            <PotionRoom />
                        </group>
                    </Float>
                </Suspense>

                {/* ExploreRoom - Bottom section (Around Y=-10) */}
                <Suspense fallback={null}>
                    <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.4}>
                        <group position={[1, -10, 0]} scale={0.8} rotation={[0, Math.PI * 0.5, 0]}>
                            <ExploreRoom />
                        </group>
                    </Float>
                </Suspense>
            </group>
        </>
    );
}