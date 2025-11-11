'use client';
import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "@/Activity/Experience";
import { Work } from "@/components/activity/Modal";
import { Suspense, useState } from "react";
import { BackButton } from "@/components/navigation/NavigateButton";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import HintMessage from "@/components/ui/HintMessage";
import { roomSentences } from "@/utils/Sentence";
import { SectionButton } from "@/components/navigation/GlobalSectionButton";

export default function Activity() {
    const [openWork, setOpenWork] = useState(false);

    const buttons = [
        { name: 'Activity', setOpen: setOpenWork, isOpen: openWork }
    ]

    return (
        <>
            <Suspense fallback={LoadingScreen}>
                <div className='absolute top-0 left-0 w-full h-full z-10 bg-gradientcustom2'>
                    <Canvas
                        shadows
                        camera={{
                            fov: 45,
                            near: 0.1,
                            far: 200,
                            // position: [2.5, 4, 6],
                            position: [2, 2, 2]
                        }}
                    >
                        <OrbitControls />
                        <Experience setOpenWork={setOpenWork} />
                        <Preload all />
                    </Canvas>
                </div>

                {openWork && <Work setOpen={setOpenWork} />}

                <BackButton />

                <HintMessage sentences={roomSentences} />

                <SectionButton buttons={buttons} />
            </Suspense>
        </>
    );
}
