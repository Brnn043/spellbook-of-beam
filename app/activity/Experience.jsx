import React, { useEffect } from "react";
import gsap from "gsap";
import ExploreRoom from "@/components/activity/ExploreRoom";
import { QuestionMark } from "@/components/ui/QuestionMark";
import { BakeShadows } from "@react-three/drei";
import Character from "@/components/characters/StaticCharacter";
import { useThree } from "@react-three/fiber";

export default function Experience({ setOpenWork }) {
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

    return (
        <>
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
            <group className="explore-room" position={[-0.5, -2.25, -1]}>
                <ExploreRoom />
                <QuestionMark position={[0, 2, 0]} setOpen={setOpenWork} title={"Activity"} />
            </group>

            <Character position={[0.75, -2.06, -1]} rotation={[0, Math.PI - 0.25, 0]} />
            <BakeShadows />
        </>
    );
}
