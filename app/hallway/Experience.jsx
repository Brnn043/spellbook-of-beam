import Character from "@/components/characters/Character"
import Hallway from "@/components/layout/Hallway"

export default function Experience({ controls, openModal, checkDoorTrigger }) {
    return <>

        <ambientLight intensity={0.5} color="#ecc7ff" />
        <directionalLight
            castShadow
            name="shadowLight"
            position={[10, 13, 4]}
            intensity={3}
            shadow-mapSize-width={4096}
            shadow-mapSize-height={4096}
            shadow-camera-near={1}
            shadow-camera-far={100}
            shadow-camera-left={-3}
            shadow-camera-right={20}
            shadow-camera-top={15}
            shadow-camera-bottom={-20}
            shadow-bias={-0.0005}
        />
        <Character controls={controls} openModal={openModal} checkDoorTrigger={checkDoorTrigger} />
        <Hallway />
    </>
}
