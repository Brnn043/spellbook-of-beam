# Spellbook of Beam 🎀

Welcome to my **Spellbook**, where every spell tells a story.  
This is my **portfolio**, a place to explore my journey through two unique experiences:

- **Quick View** (/summary) — A modern, kawaii-styled scrolling portfolio
- **3D Explore** (/hallway) — An interactive 3D world to explore room by room

May you enjoy the magic that awaits within. 🔮

**Last Updated**: January 2025

---

### Created by:  
**Beam (Raksakul Hiranas)** — the witch of this mansion

### How to Navigate:

**Landing Page** (`/`): Choose your viewing experience
- **Quick View** — Fast, scrolling portfolio with smooth animations✨
  <img width="1919" height="867" alt="image" src="https://github.com/user-attachments/assets/ed6b717d-5f7c-4f60-a101-e612fe5ede42" />

- **3D Explore** — Travel through the enchanted hallway by moving left and right. Each room holds its own secrets — click on the elements to reveal the magic within. 🪄
  <img width="1919" height="867" alt="image" src="https://github.com/user-attachments/assets/d2eb2330-8dae-4935-8c95-b9a2ecbe3159" />

### Visit the Website:
To enter the mystical world and explore the magic for yourself, cast a spell [here](https://spellbook-of-beam.vercel.app). ✨

---

## 📁 Project Structure

This enchanted portfolio is built with **Next.js 14**, **React Three Fiber**, and **Tailwind CSS**, featuring dual viewing modes: a modern kawaii-styled portfolio and an immersive 3D experience.

```
spellbook-of-beam/
├── app/                          # Next.js App Router pages
│   ├── page.jsx                  # Landing page (view mode selection)
│   ├── layout.jsx                # Root layout
│   ├── global.css                # Global styles
│   ├── head.jsx                  # Document head
│   ├── hallway/                  # 3D Interactive Experience
│   │   ├── page.jsx              # Hallway page
│   │   └── Experience.jsx        # Main 3D scene
│   ├── summary/                  # Quick View Portfolio
│   │   ├── page.jsx              # Summary page with scroll sections
│   │   └── Experience.jsx        # 3D background animations
│   ├── activity/                 # Activity room pages
│   │   ├── page.jsx              # Activity page
│   │   └── Experience.jsx        # Activity 3D experience
│   ├── profile/                  # Profile room pages
│   │   ├── page.jsx              # Profile page
│   │   └── Experience.jsx        # Profile 3D experience
│   └── project/                  # Project room pages
│       ├── page.jsx              # Project page
│       └── Experience.jsx        # Project 3D experience
├── src/
│   ├── components/               # Organized component library
│   │   ├── summary/              # Summary page components
│   │   │   ├── HeroSections.jsx  # Hero section variants
│   │   │   ├── FloatingNavbar.jsx # Navigation sidebar
│   │   │   ├── WindowCard.jsx    # Kawaii window card component
│   │   │   ├── EducationSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── ExperienceSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   └── ScrollSection.jsx # Scroll-based camera controller
│   │   ├── characters/           # 3D character components
│   │   │   ├── Character.jsx     # Animated character
│   │   │   └── StaticCharacter.jsx
│   │   ├── navigation/           # Navigation UI components
│   │   │   ├── NavigateButton.jsx
│   │   │   ├── MoveButton.jsx
│   │   │   └── GlobalSectionButton.jsx
│   │   ├── layout/               # Layout & structural components
│   │   │   ├── LoadingScreen.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Hallway.jsx
│   │   │   └── Visit.jsx
│   │   ├── ui/                   # Reusable UI components
│   │   │   ├── HintMessage.jsx
│   │   │   ├── QuestionMark.jsx
│   │   │   ├── ModalComponents.jsx
│   │   │   └── SkillComponents.jsx
│   │   ├── modals/               # Modal components
│   │   │   ├── WelcomeModal.jsx
│   │   │   └── GlobalModal.jsx
│   │   ├── hooks/                # Custom React hooks
│   │   │   └── useDoorTracker.jsx
│   │   ├── canvas/               # Three.js canvas components
│   │   │   ├── Scene.jsx
│   │   │   ├── View.jsx
│   │   │   └── Examples.jsx
│   │   ├── activity/             # Activity-specific components
│   │   │   ├── Modal.jsx
│   │   │   └── ExploreRoom.jsx
│   │   ├── profile/              # Profile-specific components
│   │   │   ├── Modal.jsx
│   │   │   └── Bedroom.jsx
│   │   └── project/              # Project-specific components
│   │       ├── Modal.jsx
│   │       └── PotionRoom.jsx
│   ├── data/                     # Static data files
│   │   ├── personal.js           # Personal information
│   │   ├── education.js          # Education background
│   │   ├── skills.js             # Technical & language skills
│   │   ├── activities.js         # Work experience & activities
│   │   ├── projects.js           # Project portfolio data
│   │   └── contact.js            # Contact information
│   ├── helpers/                  # Helper utilities
│   │   ├── global.js             # Global constants
│   │   └── components/
│   │       └── Three.jsx
│   ├── templates/                # Template components
│   │   ├── Scroll.jsx
│   │   ├── hooks/
│   │   │   └── usePostprocess.jsx
│   │   └── Shader/
│   │       ├── Shader.jsx
│   │       └── glsl/
│   │           ├── shader.frag
│   │           └── shader.vert
│   └── utils/                    # Utility functions
│       ├── Door.jsx              # Door interaction logic
│       └── Sentence.jsx          # Text content utilities
├── public/                       # Static assets
│   ├── manifest.json
│   ├── mascot.webp               # Beam's mascot image
│   ├── beam-photos/              # Personal photos
│   ├── draco/                    # 3D compression library
│   ├── fonts/                    # Custom fonts
│   └── project/                  # Project images & assets
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
├── jsconfig.json                 # JavaScript configuration
└── package.json                  # Dependencies & scripts
```

### 🏗️ Architecture Highlights

- **🎭 Dual Viewing Modes**: 
  - **Quick View** — Modern kawaii-styled scrolling portfolio with smooth scroll-snap and 3D background animations
  - **3D Explore** — Fully interactive 3D hallway experience with keyboard controls
- **📱 Fully Responsive**: Optimized for both desktop and mobile devices
- **🎨 Modern UI**: Tailwind CSS with custom kawaii aesthetic, gradients, and smooth animations
- **📊 Data Separation**: Clean separation of static data from components for easy maintenance
- **🧩 Component Organization**: Logically grouped components by functionality (summary/, navigation/, layout/, etc.)
- **⚡ Performance Optimized**: Next.js 14 with optimized loading, caching, and lazy loading
- **🎮 Interactive Navigation**: 
  - Summary page: Floating navbar with section tracking
  - Hallway: Keyboard controls and click interactions for immersive experience
- **🎨 3D Graphics**: React Three Fiber with custom animations and camera controls

### 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Styling**: Tailwind CSS, PostCSS
- **Animations**: GSAP, Framer Motion
- **Deployment**: Vercel
