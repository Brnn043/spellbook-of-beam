'use client';
import { Canvas } from "@react-three/fiber";
import { Suspense, createContext, useState } from "react";
import Experience from "./Experience";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import {
    HeroSection,
    DeveloperSection,
    PotionSection,
    AdventureSection,
    AboutSection,
    EducationSection,
    SkillsSection,
    ProjectsSection,
    ExperienceSection,
    ContactSection,
    ScrollSection
} from "@/components/summary";
import { FloatingNavbar } from "@/components/summary/FloatingNavbar";

// Create context for camera position
export const CameraContext = createContext({ cameraY: 20, setCameraY: () => { } });

export default function Summary() {
    const [cameraY, setCameraY] = useState(20);

    return (
        <CameraContext.Provider value={{ cameraY, setCameraY }}>
            <div className="min-h-screen bg-transparent">
                {/* Floating Navigation */}
                <FloatingNavbar />

                {/* Main Content Wrapper with padding for sidebar/navbar */}
                <div className="md:pl-20 pt-16 md:pt-0">
                    {/* Fixed 3D Background */}
                    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
                        <Suspense fallback={<LoadingScreen />}>
                            <Canvas
                                camera={{
                                    fov: 45,
                                    near: 0.1,
                                    far: 200,
                                    position: [0, 20, 8],
                                }}
                            >
                                <Experience />
                            </Canvas>
                        </Suspense>
                    </div>

                    {/* Scrollable Content */}
                    <div className="relative z-10">
                        {/* Hero Sections with 3D Models */}
                        <ScrollSection targetY={20} setCameraY={setCameraY}>
                            <div id="hero">
                                <HeroSection />
                            </div>
                        </ScrollSection>

                        <ScrollSection targetY={8} setCameraY={setCameraY}>
                            <DeveloperSection />
                        </ScrollSection>

                        <ScrollSection targetY={0} setCameraY={setCameraY}>
                            <PotionSection />
                        </ScrollSection>

                        <ScrollSection targetY={-10} setCameraY={setCameraY}>
                            <AdventureSection />
                        </ScrollSection>

                        {/* Content Sections */}
                        <div id="about">
                            <AboutSection />
                        </div>
                        <div id="education">
                            <EducationSection />
                        </div>
                        <div id="skills">
                            <SkillsSection />
                        </div>
                        <div id="projects">
                            <ProjectsSection />
                        </div>
                        <div id="experience">
                            <ExperienceSection />
                        </div>
                        <div id="contact">
                            <ContactSection />
                        </div>
                    </div>
                </div>
            </div>
        </CameraContext.Provider>
    );
}