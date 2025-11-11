import { useState, useCallback } from "react";

export function useDoorTracker(doors) {
    const [triggeredDoors, setTriggeredDoors] = useState([]);
    const [activeModal, setActiveModal] = useState(null);

    const checkDoorTrigger = useCallback(
        (positionX) => {
            let newTriggeredDoors = [...triggeredDoors];
            let newActiveModal = activeModal;

            doors.forEach((door) => {
                const distanceToDoor = positionX - door.positionX;

                if (Math.abs(distanceToDoor) < door.radius && !newTriggeredDoors.includes(door.id)) {
                    console.log("Triggering modal: ", door.id);

                    newActiveModal = door.id;
                    newTriggeredDoors.push(door.id); // Mark this door as triggered
                } else if (Math.abs(distanceToDoor) >= door.radius) {
                    newTriggeredDoors = newTriggeredDoors.filter((id) => id !== door.id);
                }
            });

            if (newActiveModal !== activeModal || newTriggeredDoors.length !== triggeredDoors.length) {
                setActiveModal(newActiveModal);
                setTriggeredDoors(newTriggeredDoors);
            }

        }, [doors, triggeredDoors, activeModal]);

    const closeModal = useCallback(() => {
        setActiveModal(null)
    }, []);

    return { activeModal, checkDoorTrigger, closeModal };
}
