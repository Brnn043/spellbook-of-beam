import { ProjectModal } from "../GlobalModal";
import { websiteProjects, gameProjects, competitiveProjects, otherProjects } from "../../data/projects";

export const Website = ({ setOpen }) => {
    return <ProjectModal title={'Web Development'} setOpen={setOpen} data={websiteProjects} />
};

export const GameDev = ({ setOpen }) => {
    return <ProjectModal title={'Game Development'} setOpen={setOpen} data={gameProjects} />
};

export const Competitive = ({ setOpen }) => {
    return <ProjectModal title={'Competitive Programming'} setOpen={setOpen} data={competitiveProjects} />
};

export const Others = ({ setOpen }) => {
    return <ProjectModal title={'Metaverse'} setOpen={setOpen} data={otherProjects} />
};