import { useState } from "react";
import { InfoModal, ProjectModal } from "../modals";
import { ModalContainer, ModalHeader, EducationCard } from "../ui/ModalComponents";
import { TechnicalSkillCard, LanguageSkillCard, SkillsNavigation, PageIndicators } from "../ui/SkillComponents";
import { personalInfo, educationData, skillsData, interestsData } from "../../data";

export const KnowMe = ({ setOpen }) => {
    return <ProjectModal title={'About Me'} data={personalInfo} setOpen={setOpen} />
};

export const Education = ({ setOpen }) => {
    return (
        <ModalContainer>
            <ModalHeader title="Education" onClose={() => setOpen(false)} />
            <div className="p-6 space-y-6">
                {educationData.map((education, index) => (
                    <EducationCard key={index} education={education} index={index} />
                ))}
            </div>
        </ModalContainer>
    );
};

export const Interest = ({ setOpen }) => {
    return <InfoModal title={'Interests'} setOpen={setOpen} data={interestsData} />
};

export const Skills = ({ setOpen }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePrevPage = () => {
        setCurrentPage(currentPage === 0 ? 1 : 0);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage === 0 ? 1 : 0);
    };

    return (
        <ModalContainer maxWidth="max-w-2xl">
            <ModalHeader title="Skills & Expertise" onClose={() => setOpen(false)} />

            <div className="p-6">
                <SkillsNavigation
                    currentPage={currentPage}
                    onPrev={handlePrevPage}
                    onNext={handleNextPage}
                    data={skillsData}
                />

                <div className="space-y-4 max-h-96 overflow-y-auto">
                    {currentPage === 0 ? (
                        <div className="grid gap-4">
                            {skillsData[currentPage].content.map((skill, index) => (
                                <TechnicalSkillCard key={index} skill={skill} index={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {skillsData[currentPage].content.map((language, index) => (
                                <LanguageSkillCard key={index} language={language} index={index} />
                            ))}
                        </div>
                    )}
                </div>

                <PageIndicators
                    data={skillsData}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        </ModalContainer>
    );
};