import { ProjectModal } from "../modals";
import { activityData } from "../../data";

export const Work = ({ setOpen }) => {
    return <ProjectModal title={"Activity"} setOpen={setOpen} data={activityData} />
}
