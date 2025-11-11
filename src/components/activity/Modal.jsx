import { ProjectModal } from "../GlobalModal";
import { activityData } from "../../data/activities";

export const Work = ({ setOpen }) => {
    return <ProjectModal title={"Activity"} setOpen={setOpen} data={activityData} />
}
