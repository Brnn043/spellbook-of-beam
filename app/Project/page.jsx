'use client';
import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "@/Project/Experience";
import { Suspense, useState } from "react";
import { Competitive, GameDev, Others, Website } from '@/components/project/Modal'
import { BackButton } from "@/components/navigation/NavigateButton";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import HintMessage from "@/components/ui/HintMessage";
import { roomSentences } from "@/utils/Sentence";
import { SectionButton } from "@/components/navigation/GlobalSectionButton";

export default function Project() {
    const [openWebsite, setOpenWebsite] = useState(false);
    const [openGameDev, setOpenGameDev] = useState(false);
    const [openCompetitive, setOpenCompetitive] = useState(false);
    const [openOthers, setOpenOthers] = useState(false);

    const buttons = [
        { name: 'WebDev', setOpen: setOpenWebsite, isOpen: openWebsite },
        { name: 'GameDev', setOpen: setOpenGameDev, isOpen: openGameDev },
        { name: 'Competitive', setOpen: setOpenCompetitive, isOpen: openCompetitive },
        { name: 'Metaverse', setOpen: setOpenOthers, isOpen: openOthers },
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
                    <Experience setOpenWebsite={setOpenWebsite} setOpenGameDev={setOpenGameDev} setOpenCompetitive={setOpenCompetitive} setOpenOthers={setOpenOthers} />
                    <Preload all />
                </Canvas>
            </div>

            {openWebsite && <Website setOpen={setOpenWebsite} />}
            {openGameDev && <GameDev setOpen={setOpenGameDev} />}
            {openCompetitive && <Competitive setOpen={setOpenCompetitive} />}
            {openOthers && <Others setOpen={setOpenOthers} />}

            <BackButton />

            <HintMessage sentences={roomSentences} />

            <SectionButton buttons={buttons} />
        </Suspense>
    </>
}