'use client';
import MoveButton from '@/components/MoveButton';
import Experience from './Experience';
import { KeyboardControls, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import Visit from '@/components/Visit';
import { useDoorTracker } from '@/components/useDoorTracker';
import { Door } from '@/utils/Door';
import WelcomeModal from '@/components/WelcomeModal';
import HintMessage from '@/components/HintMessage';
import { NavigateButton } from '@/components/NavigateButton';

export default function Page() {
  const [controls, setControls] = useState({ forward: false, backward: false });
  const doors = Door();

  const { activeModal, checkDoorTrigger, closeModal } = useDoorTracker(doors);
  const isOpen = activeModal !== null

  const [showWelcome, setShowWelcome] = useState(true)

  return (
    <>
      <div className='absolute top-0 left-0 w-full h-full z-10 bg-black'>
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
            {/* <OrbitControls /> */}
            <Experience controls={controls} openModal={isOpen} checkDoorTrigger={checkDoorTrigger} />
          </Canvas>
        </KeyboardControls>
      </div>

      <MoveButton setControls={setControls} />
      {activeModal === "profile" && <Visit name="Profile" setOpen={closeModal} />}
      {activeModal === "project" && <Visit name="Project" setOpen={closeModal} />}
      {activeModal === "activity" && <Visit name="Activity" setOpen={closeModal} />}
      {showWelcome && <WelcomeModal setShowWelcome={setShowWelcome} />}
      {!showWelcome && <HintMessage />}

      <NavigateButton />
    </>
  );
}
