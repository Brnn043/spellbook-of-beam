'use client';
import MoveButton from '@/components/navigation/MoveButton';
import Experience from './Experience';
import { KeyboardControls, Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import Visit from '@/components/layout/Visit';
import { useDoorTracker } from '@/components/hooks/useDoorTracker';
import { Door } from '@/utils/Door';
import WelcomeModal from '@/components/modals/WelcomeModal';
import HintMessage from '@/components/ui/HintMessage';
import { NavigateButton } from '@/components/navigation/NavigateButton';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { hallwaySentences } from '@/utils/Sentence';
import { ContactButton } from '@/components/layout/Contact';


export default function Page() {
  const [controls, setControls] = useState({ forward: false, backward: false });
  const doors = Door();

  const { activeModal, checkDoorTrigger, closeModal } = useDoorTracker(doors);
  const isOpen = activeModal !== null

  const [showWelcome, setShowWelcome] = useState(true)

  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <div className='absolute top-0 left-0 w-full h-full z-10 bg-gradientcustom2'>
          <KeyboardControls
            map={[
              { name: 'forward', keys: ['ArrowRight', 'KeyD'] },
              { name: 'backward', keys: ['ArrowLeft', 'KeyA'] },
            ]}
          >
            <Canvas
              shadows
              camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [2.5, 4, 6],
              }}
            >
              <Experience controls={controls} openModal={isOpen} checkDoorTrigger={checkDoorTrigger} />
              <Preload all />
            </Canvas>
          </KeyboardControls>

        </div>

        <MoveButton setControls={setControls} />
        {activeModal === "profile" && <Visit name="profile" setOpen={closeModal} />}
        {activeModal === "project" && <Visit name="project" setOpen={closeModal} />}
        {activeModal === "activity" && <Visit name="activity" setOpen={closeModal} />}

        {showWelcome && <WelcomeModal setShowWelcome={setShowWelcome} />}
        {!showWelcome && <HintMessage sentences={hallwaySentences} />}

        <NavigateButton />

        <ContactButton />
      </Suspense>
    </>
  );
}