'use client';
import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "@/Profile/Experience";
import { KnowMe, Education, Interest, Skills } from "@/components/profile/Modal";
import { Suspense, useState, useEffect } from "react";
import { BackButton } from "@/components/navigation/NavigateButton";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import HintMessage from "@/components/ui/HintMessage";
import { roomSentences } from "@/utils/Sentence";
import { SectionButton } from "@/components/navigation/GlobalSectionButton";

export default function Profile() {
    const [openKnowMe, setOpenKnowMe] = useState(false);
    const [openEducation, setOpenEducation] = useState(false);
    const [openInterest, setOpenInterest] = useState(false);
    const [openSkills, setOpenSkills] = useState(false);

    const buttons = [
        { name: 'Me', setOpen: setOpenKnowMe, isOpen: openKnowMe },
        { name: 'Interests', setOpen: setOpenInterest, isOpen: openInterest },
        { name: 'Skills', setOpen: setOpenSkills, isOpen: openSkills },
        { name: 'Education', setOpen: setOpenEducation, isOpen: openEducation }
    ]

    return <>
        <Suspense fallback={<LoadingScreen />}>
            <div className='absolute top-0 left-0 w-full h-full z-10 bg-gradientcustom2'>
                <Canvas
                    shadows
                    camera={{
                        fov: 45,
                        near: 0.1,
                        far: 200,
                        position: [2, 2, 2],
                    }}
                >
                    <OrbitControls />
                    <Experience setOpenKnowMe={setOpenKnowMe} setOpenEducation={setOpenEducation} setOpenInterest={setOpenInterest} setOpenSkills={setOpenSkills} />
                    <Preload all />
                </Canvas>
            </div>


            {openKnowMe && <KnowMe setOpen={setOpenKnowMe} />}
            {openEducation && <Education setOpen={setOpenEducation} />}
            {openInterest && <Interest setOpen={setOpenInterest} />}
            {openSkills && <Skills setOpen={setOpenSkills} />}

            <HintMessage sentences={roomSentences} />

            <BackButton />

            <SectionButton buttons={buttons} />
        </Suspense>
    </>
}