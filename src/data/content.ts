// Edit this file to swap in your own info. Nothing else in the app
// needs to change — every component reads from here.

export const profile = {
  name: 'trapmagistr',
  handle: 'OutTuna',
  pronouns: 'he/him',
  tagline: 'i automate basic things',
  location: 'Musée du Louvre',
  utc: 'UTC+03:00',
  roles: ['systems / low-level dev', 'reverse engineer (hobbyist)', 'musician on the side'],
}

export const about = [
  'currently working on labs for my university',
  'looking for help with Dota 2 SDK + VMProtect internals',
  'currently learning C++ and Swift, properly this time',
  "fun fact — i'm a musician who sometimes loves to do smth in coding",
]

export const socials = [{ label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' }]

export const techStack = [
  'C++',
  'JavaScript',
  'TypeScript',
  'Kotlin',
  'Rust',
  'Swift',
  '.NET',
  'Node.js',
  'Next.js',
  'Vue.js',
  'FastAPI',
  'MySQL',
  'NPM',
  'Qt',
  'Figma',
  'Gimp',
  'Gradle',
  'FFmpeg',
  'Tampermonkey',
]

export const stats = {
  starsEarned: 27,
  commitsLastYear: 257,
  totalPRs: 3,
  totalIssues: 1,
  totalContributions: 329,
  contributionsSince: 'Jan 21, 2020',
  currentStreak: 1,
  longestStreak: 4,
  languages: [
    { name: 'C', pct: 77.56, color: '#888888' },
    { name: 'C++', pct: 15.09, color: '#777777' },
    { name: 'Swift', pct: 2.26, color: '#808080' },
    { name: 'TypeScript', pct: 2.2, color: '#8A8A8A' },
    { name: 'Python', pct: 1.5, color: '#7A7A7A' },
    { name: 'JavaScript', pct: 1.38, color: '#909090' },
  ],
}

export type Project = {
  name: string
  description: string
  stack: string[]
  href?: string
  status: 'shipped' | 'in progress' | 'archived'
}

export const projects: Project[] = [
  {
    name: 'Dota2CFGChanger',
    description: 'Standalone C++ application for managing Dota 2 configs. Built with ImGui + GLFW + cpr.',
    stack: ['C++', 'ImGui', 'GLFW'],
    href: 'https://github.com/OutTuna/Dota2CFGChanger',
    status: 'shipped',
  },
  {
    name: 'Valorant-Shop-Tauri',
    description: 'Check the Valorant store without logging into the game. Built with Tauri and Rust.',
    stack: ['TypeScript', 'Tauri', 'Rust'],
    href: 'https://github.com/OutTuna/Valorant-Shop-Tauri',
    status: 'shipped',
  },
  {
    name: 'SoundCloud_Downloader_Bot',
    description: 'Telegram bot for downloading SoundCloud tracks directly in chat using inline mode.',
    stack: ['Python'],
    href: 'https://github.com/OutTuna/SoundCloud_Downloader_Bot',
    status: 'shipped',
  },
  {
    name: 'PictureDropper',
    description: 'Bridge bot that drops pictures from Telegram to Discord channels.',
    stack: ['Python'],
    href: 'https://github.com/OutTuna/PictureDropper',
    status: 'shipped',
  },
  {
    name: 'Invoker-game-hack',
    description: 'Userscript hack for invoker-game.com with enhanced gameplay features.',
    stack: ['JavaScript', 'Tampermonkey'],
    href: 'https://github.com/OutTuna/Invoker-game-hack',
    status: 'shipped',
  },
  {
    name: 'password-generator-android',
    description: 'Simple and lightweight password generator application for Android.',
    stack: ['Kotlin'],
    href: 'https://github.com/OutTuna/password-generator-android',
    status: 'shipped',
  },
  {
    name: 'NixOS-ServerSideClient',
    description: 'NixOS configuration for server-side deployment and management.',
    stack: ['Nix'],
    href: 'https://github.com/OutTuna/NixOS-ServerSideClient',
    status: 'shipped',
  },
  {
    name: 'CSharp_Labs',
    description: 'Collection of C# laboratory assignments and learning exercises.',
    stack: ['C#', '.NET'],
    href: 'https://github.com/OutTuna/CSharp_Labs',
    status: 'shipped',
  },
  {
    name: 'SDA-IOS',
    description: 'iOS application built with Swift for learning and development purposes.',
    stack: ['Swift'],
    href: 'https://github.com/OutTuna/SDA-IOS',
    status: 'shipped',
  },
  {
    name: 'Data_Course',
    description: 'Laboratory assignments and exercises from data structures course.',
    stack: ['C++'],
    href: 'https://github.com/OutTuna/Data_Course',
    status: 'shipped',
  },
  {
    name: 'LapTracker',
    description: 'Roblox Lua script for tracking and analyzing racing lap times.',
    stack: ['Lua'],
    href: 'https://github.com/OutTuna/LapTracker',
    status: 'shipped',
  },
  {
    name: 'SoundCloud-Ultimate-Downloader',
    description: 'Complete SoundCloud downloader with batch processing capabilities.',
    stack: ['JavaScript'],
    href: 'https://github.com/OutTuna/SoundCloud-Ultimate-Downloader',
    status: 'archived',
  },
]

export const commands = [
  { id: 'about', label: 'go to about', section: 'about' },
  { id: 'stack', label: 'go to tech stack', section: 'stack' },
  { id: 'projects', label: 'go to projects', section: 'projects' },
  { id: 'stats', label: 'go to github stats', section: 'stats' },
  { id: 'contact', label: 'go to contact', section: 'contact' },
]
