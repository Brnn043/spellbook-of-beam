import Bedroom from "@/components/profile/Bedroom";
import { QuestionMark } from "@/components/ui/QuestionMark";
import { BakeShadows } from "@react-three/drei";
import Character from "@/components/characters/StaticCharacter";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";

export default function Experience({ setOpenKnowMe, setOpenEducation, setOpenInterest, setOpenSkills }) {
    const { camera } = useThree();

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to(camera.position, {
            duration: 1,
            x: 2.5,
            y: 4,
            z: 6,
            ease: "power2.inOut",
        });

        gsap.fromTo(
            ".explore-room",
            { rotation: Math.PI * 1.5 },
            { rotation: 0, duration: 1.5, ease: "power2.inOut" }
        );

    }, [camera]);

    return <>
        <ambientLight intensity={0.25} color="#f8eaff" />
        <directionalLight
            castShadow
            name="shadowLight"
            position={[5, 10, 15]}
            intensity={3}
            shadow-mapSize-width={4096}
            shadow-mapSize-height={4096}
            shadow-camera-near={1}
            shadow-camera-far={100}
            shadow-camera-left={-4}
            shadow-camera-right={30}
            shadow-camera-top={15}
            shadow-camera-bottom={-15}
            shadow-bias={-0.0005}
        />
        <group position={[-0.75, -2, -1]}>
            <Bedroom />
            {/* Bed */}
            <QuestionMark position={[-0.75, 1.5, 0.5]} setOpen={setOpenInterest} title={"Interests"} />
            {/* Broom */}
            <QuestionMark position={[-1, 1.5, 2]} setOpen={setOpenEducation} title={"Education"} />
            {/* Mirror */}
            <QuestionMark position={[0.65, 2.2, -0.3]} setOpen={setOpenKnowMe} title={"Me"} />
            {/* Hat */}
            <QuestionMark position={[1.65, 2.85, -0.75]} setOpen={setOpenSkills} title={"Skills"} />
        </group>

        <Character position={[0, -1.7, 0.25]} rotation={[0, Math.PI + 0.5, 0]} />
        <BakeShadows />
    </>
}