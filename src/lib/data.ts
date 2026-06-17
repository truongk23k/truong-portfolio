export const personalInfo = {
  name: "Truong LV",
  title: "Playable Ads Developer",
  tagline: "& Unity Developer",
  subtitle: "Converting players before they download",
  description:
    "I create engaging playable ads with Unity and Luna Playable, transforming core game mechanics into interactive experiences that capture player attention and showcase the fun of the game within seconds.",
  email: "truongk23k@gmail.com",
  phone: "+84 35 836 1277",
  location: "Ha Noi City, Vietnam",
  github: "https://github.com/truongk23k",
  linkedin: "https://www.linkedin.com/in/van-truong-lai-b50538222/",
  twitter: "#",
  available: true,
}

export const stats = [
  { value: "20+", label: "Games Turned into Playables" },
  { value: "11", label: "Months at Sonat Game" },
  { value: "7", label: "Ad Networks Supported" },
  { value: "1M+", label: "Installs Driven" },
]

export const featuredPlayables = [
  {
    id: 1,
    gameName: "Solitaire Pop: Pair Match",
    genre: "Casual",
    engine: "Luna Playable",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    glowColor: "shadow-orange-500/40",
    borderGlow: "hover:border-orange-500/50",
    icon: "🃏",
    hudColor: "from-amber-400 to-orange-400",
    thumbnailUrl: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/1b/27/ff/1b27ffc2-35e6-ef6c-6650-26079cfb8fae/PairMatch_2048x2732_CPPBasic_PA2_thaonp180526_1.png/576x768bb.png",
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a1/fc/07/a1fc0701-2345-9ee6-5bd4-d4e88531c2d9/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    tasks: [
      { name: "Summer", playUrl: "https://playground.lunalabs.io/preview/440480/598664/1b926157a6e5d4f657db9f055ff85c40e944f3bf14e602e1e39b3628bf2b4bfd" },
      { name: "BeachFish", playUrl: "https://playground.lunalabs.io/preview/440852/599252/1b926157a6e5d4f657db9f055ff85c40e944f3bf14e602e1e39b3628bf2b4bfd" },
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.solitaire.pop.pair.match.puzzle",
    appStoreUrl: "https://apps.apple.com/us/app/solitaire-pop-pair-match/id6770403430",
  },
  {
    id: 2,
    gameName: "Pop Sort: Color Ball Jam",
    genre: "Casual",
    engine: "Luna Playable",
    gradient: "from-violet-500 via-pink-500 to-orange-400",
    glowColor: "shadow-pink-500/40",
    borderGlow: "hover:border-pink-500/50",
    icon: "🎱",
    hudColor: "from-violet-400 to-pink-400",
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c6/12/4f/c6124f1f-6757-516b-939f-c767be8ba850/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    tasks: [
      { name: "Watermelon", playUrl: "https://playground.lunalabs.io/preview/438740/596191/1b926157a6e5d4f657db9f055ff85c40e944f3bf14e602e1e39b3628bf2b4bfd" },
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.popsort.colorball.jam",
    appStoreUrl: "https://apps.apple.com/us/app/pop-sort-color-ball-jam/id6762253738",
  },
  // TODO: thêm game 3
]

export const skills = [
  {
    category: "Unity Development",
    icon: "🎮",
    gradient: "from-blue-500 to-cyan-400",
    shadow: "shadow-blue-500/20",
    items: [
      { name: "Unity Engine (C#)", level: 92 },
      { name: "Unity WebGL Build", level: 88 },
      { name: "2D / 3D Rendering", level: 82 },
      { name: "Physics Simulation", level: 78 },
    ],
  },
  {
    category: "Playable Ad Tech",
    icon: "⚡",
    gradient: "from-purple-500 to-pink-400",
    shadow: "shadow-purple-500/20",
    items: [
      { name: "HTML5 Canvas / WebGL", level: 92 },
      { name: "PixiJS / PIXI", level: 88 },
      { name: "GSAP Animation", level: 92 },
      { name: "Game Loop Design", level: 85 },
    ],
  },
  {
    category: "Delivery & Optimization",
    icon: "🚀",
    gradient: "from-emerald-500 to-teal-400",
    shadow: "shadow-emerald-500/20",
    items: [
      { name: "Sub-5MB Asset Pipeline", level: 90 },
      { name: "Ad Network SDKs", level: 85 },
      { name: "Cross-platform Build", level: 82 },
      { name: "Performance Profiling", level: 80 },
    ],
  },
]

export const experiences = [
  {
    id: 1,
    role: "Playable Ads Developer",
    company: "Sonat Game",
    period: "Dec 2025 — Present",
    description:
      "Building playable ads full-time using Unity and C#. Owning the end-to-end pipeline from game mechanic design and Unity build to network delivery and performance iteration.",
    tags: ["Unity", "C#", "WebGL", "Luna Playable"],
    current: true,
  },
  {
    id: 2,
    role: "Playable Ads Developer (Intern)",
    company: "Sonat Game",
    period: "Aug 2025 — Dec 2025",
    description:
      "Joined as a part-time intern learning the playable ads pipeline. Worked on Unity-based interactive ad prototypes and assisted in delivery across major ad networks.",
    tags: ["Unity", "C#", "HTML5", "Playable Ads"],
    current: false,
  },
]

export const contactInfo = [
  {
    icon: "✉",
    label: "Email",
    value: "truongk23k@gmail.com",
    href: "mailto:truongk23k@gmail.com",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Ha Noi City, Vietnam",
    href: "https://www.google.com/maps/search/Hanoi,+Vietnam",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    icon: "💼",
    label: "Open to",
    value: "Game Studios & Ad Agencies",
    href: "https://www.linkedin.com/in/van-truong-lai-b50538222/",
    gradient: "from-emerald-500 to-teal-400",
  },
]
