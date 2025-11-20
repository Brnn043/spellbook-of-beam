import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Octahedron, Torus, Stars, Float } from '@react-three/drei';

// Magical Book Component  
function MagicalBook({ position, color, scale = 1 }) {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.005;
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.15;
        }
    });

    return (
        <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.8}>
            <group ref={meshRef} position={position}>
                <Box args={[scale * 0.8, scale * 0.1, scale * 1.2]}>
                    <meshStandardMaterial
                        color={color}
                        emissive={color}
                        emissiveIntensity={0.15}
                        roughness={0.3}
                        metalness={0.7}
                    />
                </Box>
                {/* Book pages */}
                <Box args={[scale * 0.75, scale * 0.05, scale * 1.15]} position={[0, scale * 0.05, 0]}>
                    <meshStandardMaterial color="#FFFFFF" roughness={0.8} />
                </Box>
            </group>
        </Float>
    );
}

// Magical Wand Component
function MagicalWand({ position, color, scale = 1 }) {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.z += 0.01;
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
        }
    });

    return (
        <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2.2}>
            <group ref={meshRef} position={position}>
                {/* Wand handle */}
                <Box args={[scale * 0.1, scale * 2, scale * 0.1]}>
                    <meshStandardMaterial color="#8B4513" roughness={0.8} />
                </Box>
                {/* Wand tip */}
                <Sphere args={[scale * 0.2]} position={[0, scale * 1.2, 0]}>
                    <meshStandardMaterial
                        color={color}
                        emissive={color}
                        emissiveIntensity={0.5}
                        transparent
                        opacity={0.8}
                    />
                </Sphere>
            </group>
        </Float>
    );
}

// Magical Crystal Component
function MagicalCrystal({ position, color, scale = 1 }) {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.02;
            // Gentle floating motion
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
        }
    });

    return (
        <Float
            speed={2}
            rotationIntensity={1}
            floatIntensity={2}
        >
            <Octahedron ref={meshRef} args={[scale, 0]} position={position}>
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.3}
                    transparent
                    opacity={0.8}
                />
            </Octahedron>
        </Float>
    );
}

// Magical Orb Component
function MagicalOrb({ position, color, scale = 1 }) {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.005;
            meshRef.current.rotation.z += 0.01;
            // Pulsing effect
            const pulse = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
            meshRef.current.scale.setScalar(scale * pulse);
        }
    });

    return (
        <Float
            speed={1.5}
            rotationIntensity={0.5}
            floatIntensity={1}
        >
            <Sphere ref={meshRef} args={[scale, 32, 32]} position={position}>
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.4}
                    transparent
                    opacity={0.7}
                />
            </Sphere>
        </Float>
    );
}

// Magical Cube Component
function MagicalCube({ position, color, scale = 1 }) {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.008;
            meshRef.current.rotation.y += 0.012;
            meshRef.current.rotation.z += 0.005;
        }
    });

    return (
        <Float
            speed={1.8}
            rotationIntensity={0.8}
            floatIntensity={1.5}
        >
            <Box ref={meshRef} args={[scale, scale, scale]} position={position}>
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.2}
                    transparent
                    opacity={0.6}
                />
            </Box>
        </Float>
    );
}

// Magical Torus Component
function MagicalTorus({ position, color, scale = 1 }) {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.015;
        }
    });

    return (
        <Float
            speed={2.2}
            rotationIntensity={1.2}
            floatIntensity={2.5}
        >
            <Torus ref={meshRef} args={[scale, scale * 0.4, 16, 100]} position={position}>
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.35}
                    transparent
                    opacity={0.75}
                />
            </Torus>
        </Float>
    );
}

// Main Experience Component
export default function Experience() {
    const groupRef = useRef();
    const { camera } = useThree();

    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Simple camera movement on scroll without GSAP
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
            const scrollProgress = Math.min(scrollY / maxScroll, 1);

            // Direct camera movement
            camera.position.z = 5 + scrollProgress * 10;
            camera.position.y = scrollProgress * 5 - 2;
            camera.position.x = Math.sin(scrollProgress * Math.PI) * 2;

            camera.rotation.x = -scrollProgress * 0.3;
            camera.rotation.y = Math.sin(scrollProgress * Math.PI * 0.5) * 0.15;

            // Rotate the entire group
            if (groupRef.current) {
                groupRef.current.rotation.y = scrollProgress * Math.PI * 2;
                groupRef.current.rotation.x = scrollProgress * Math.PI * 0.3;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, [camera]);

    return (
        <>
            {/* Enhanced Lighting for 3D Models */}
            <ambientLight intensity={0.8} color="#FFFFFF" />
            <ambientLight intensity={0.3} color="#8B5CF6" />

            {/* Main directional light */}
            <directionalLight
                position={[10, 10, 5]}
                intensity={1.5}
                color="#FFFFFF"
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-camera-near={0.1}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />

            {/* Additional colored lights for better model visibility */}
            <pointLight position={[-10, 5, -5]} intensity={0.8} color="#06B6D4" />
            <pointLight position={[10, -2, -8]} intensity={0.8} color="#F59E0B" />
            <pointLight position={[0, 8, -10]} intensity={0.6} color="#10B981" />
            <pointLight position={[-5, 0, 5]} intensity={0.4} color="#EF4444" />

            {/* Spotlight for character */}
            <spotLight
                position={[8, 8, 0]}
                angle={0.3}
                penumbra={0.2}
                intensity={1}
                color="#FFFFFF"
                target-position={[4, 3, -6]}
                castShadow
            />            {/* Stars background */}
            <Stars
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                saturation={0}
                fade={true}
                speed={1}
            />

            {/* Main group of magical elements */}
            <group ref={groupRef}>
                {/* Magical Crystals - Close to camera */}
                <MagicalCrystal position={[-2, 1, 0]} color="#EC4899" scale={0.8} />
                <MagicalCrystal position={[2, -0.5, -1]} color="#8B5CF6" scale={0.6} />
                <MagicalCrystal position={[-1, -2, 1]} color="#06B6D4" scale={0.7} />

                {/* Magical Orbs */}
                <MagicalOrb position={[1.5, 2, -0.5]} color="#F59E0B" scale={0.5} />
                <MagicalOrb position={[-3, 0, 0.5]} color="#10B981" scale={0.6} />
                <MagicalOrb position={[0.5, -1.5, -2]} color="#EF4444" scale={0.4} />

                {/* Magical Cubes */}
                <MagicalCube position={[3, 0.5, -1]} color="#A855F7" scale={0.7} />
                <MagicalCube position={[-0.5, 3, 0]} color="#EC4899" scale={0.5} />
                <MagicalCube position={[-2, -0.5, -2]} color="#06B6D4" scale={0.6} />

                {/* Magical Toruses */}
                <MagicalTorus position={[0, 0, -3]} color="#8B5CF6" scale={0.8} />
                <MagicalTorus position={[4, -1, -1.5]} color="#F59E0B" scale={0.6} />
                <MagicalTorus position={[-3, 2, -2]} color="#10B981" scale={0.7} />

                {/* Magical Books */}
                <MagicalBook position={[-4, 0.5, -4]} color="#A855F7" scale={1} />
                <MagicalBook position={[5, 3, -3]} color="#EC4899" scale={0.7} />
                <MagicalBook position={[-1.5, -3, -5]} color="#06B6D4" scale={0.8} />

                {/* Magical Wands */}
                <MagicalWand position={[5.5, 0, -6]} color="#F59E0B" scale={0.5} />
                <MagicalWand position={[-6, 4, -5]} color="#10B981" scale={0.7} />
                <MagicalWand position={[1.5, -4, -7]} color="#EF4444" scale={0.6} />
            </group>

            {/* Invisible orbit controls for subtle mouse interaction */}
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={true}
                autoRotate={true}
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
        </>
    );
}