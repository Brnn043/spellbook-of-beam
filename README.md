# Spellbook of Beam 🎀

Welcome to my **Spellbook**, where every spell tells a story.  
This is my **portfolio**, a place to explore the spells and incantations that shape my journey.

May you enjoy the magic that awaits within. 🔮

---

### Created by:  
**Beam (Raksakul Hiranas)** — the witch of this mansion

### How to Navigate:
Travel through the enchanted hallway by moving left and right. Each room holds its own secrets — click on the elements to reveal the magic within and explore the details of each creation. 🪄

### Visit the Website:
To enter the mystical world and explore the magic for yourself, simply cast a spell [here](https://spellbook-of-beam.vercel.app). ✨

---

## 📁 Project Structure

This enchanted portfolio is built with **Next.js 14**, **React Three Fiber**, and **Tailwind CSS**, featuring a mystical 3D experience with organized component architecture.

```
spellbook-of-beam/
├── app/                          # Next.js App Router pages
│   ├── page.jsx                  # Main hallway page
│   ├── layout.jsx                # Root layout
│   ├── global.css                # Global styles
│   ├── head.jsx                  # Document head
│   ├── Experience.jsx            # Main 3D scene
│   ├── Activity/                 # Activity room pages
│   │   ├── page.jsx              # Activity page
│   │   └── Experience.jsx        # Activity 3D experience
│   ├── Profile/                  # Profile room pages
│   │   ├── page.jsx              # Profile page
│   │   └── Experience.jsx        # Profile 3D experience
│   └── Project/                  # Project room pages
│       ├── page.jsx              # Project page
│       └── Experience.jsx        # Project 3D experience
├── src/
│   ├── components/               # Organized component library
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
│   │   │   └── Visit.jsx
│   │   ├── ui/                   # Reusable UI components
│   │   │   ├── HintMessage.jsx
│   │   │   ├── QuestionMark.jsx
│   │   │   ├── ModalComponents.jsx
│   │   │   └── SkillComponents.jsx
│   │   ├── modals/               # Modal components
│   │   │   └── WelcomeModal.jsx
│   │   ├── hooks/                # Custom React hooks
│   │   │   └── useDoorTracker.jsx
│   │   ├── canvas/               # Three.js canvas components
│   │   │   ├── Scene.jsx
│   │   │   ├── View.jsx
│   │   │   └── Examples.jsx
│   │   ├── dom/                  # DOM-specific components
│   │   │   └── Layout.jsx
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
│   │   └── projects.js           # Project portfolio data
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

- **📱 Responsive 3D Experience**: Built with React Three Fiber for interactive 3D scenes
- **🎨 Modern UI**: Tailwind CSS with custom gradient designs and smooth animations
- **📊 Data Separation**: Clean separation of static data from components for easy maintenance
- **🧩 Component Organization**: Logically grouped components by functionality
- **⚡ Performance Optimized**: Next.js 14 with optimized loading and caching
- **🎭 Interactive Navigation**: Keyboard controls and click interactions for immersive experience

### 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Styling**: Tailwind CSS, PostCSS
- **Animations**: GSAP, Framer Motion
- **Deployment**: Vercel
