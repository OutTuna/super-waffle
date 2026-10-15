export const profile = {
  name: 'Gleb',
  handle: 'OutTuna',
  tagline: 'I automate the everyday.',
  github: 'https://github.com/OutTuna',
  source: 'https://github.com/OutTuna/super-waffle',
  roles: [
    'Systems & low-level development',
    'Reverse engineering',
    'Music on the side',
  ],
}
export const about = [
  'I’m Gleb, also known as OutTuna. I build small applications, scripts and experiments that take the repetition out of everyday things.',
  'My interests sit somewhere between systems programming, reverse engineering and making software a little more useful. When I’m away from the editor, I make music.',
]
export const now = [
  {
    title: 'Building',
    text: 'University labs, small utilities and personal experiments.',
  },
  {
    title: 'Learning',
    text: 'Going deeper into C++ and Swift, properly this time.',
  },
  {
    title: 'Exploring',
    text: 'Dota 2 SDK and VMProtect internals. Always happy to compare notes.',
  },
]
export const techGroups = [
  {
    name: 'Languages',
    items: ['C++', 'Rust', 'TypeScript', 'JavaScript', 'Kotlin', 'Swift'],
  },
  {
    name: 'Applications & web',
    items: ['Qt', '.NET', 'Node.js', 'Next.js', 'Vue.js', 'FastAPI', 'MySQL'],
  },
  {
    name: 'Tools & creative work',
    items: ['Nix', 'Gradle', 'FFmpeg', 'Tampermonkey', 'Figma', 'Gimp'],
  },
]
export type Category = 'All' | 'Desktop' | 'Automation' | 'Experiments'
export type Project = {
  slug: string
  name: string
  description: string
  stack: string[]
  href: string
  category: Exclude<Category, 'All'>
  status: 'shipped' | 'in progress' | 'archived'
  featured?: boolean
}
export const projects: Project[] = [
  {
    slug: 'dota-config',
    name: 'Dota 2 Config Manager',
    description:
      'Your Dota 2 setup, on another Steam account. A native utility to copy configurations, keep backups and skip the manual work.',
    stack: ['C++', 'ImGui', 'GLFW'],
    href: 'https://github.com/OutTuna/Dota2CFGChanger',
    category: 'Desktop',
    status: 'shipped',
    featured: true,
  },
  {
    slug: 'valorant-store',
    name: 'Valorant Store',
    description:
      'Your daily shop and Night Market, without launching the game. A desktop app with a Rust backend and a Tauri interface.',
    stack: ['TypeScript', 'Tauri', 'Rust'],
    href: 'https://github.com/OutTuna/Valorant-Shop-Tauri',
    category: 'Desktop',
    status: 'shipped',
    featured: true,
  },
  {
    slug: 'soundcloud-bot',
    name: 'SoundCloud Downloader Bot',
    description:
      'Download SoundCloud tracks directly in Telegram, including inline mode. A small bot that keeps the workflow in your chat.',
    stack: ['Python', 'Telegram'],
    href: 'https://github.com/OutTuna/SoundCloud_Downloader_Bot',
    category: 'Automation',
    status: 'shipped',
  },
  {
    slug: 'picture-dropper',
    name: 'PictureDropper',
    description:
      'A bridge between Telegram and Discord. Drop a picture in one place and let the bot carry it to the other.',
    stack: ['Python', 'Discord'],
    href: 'https://github.com/OutTuna/PictureDropper',
    category: 'Automation',
    status: 'shipped',
  },
  {
    slug: 'invoker-game',
    name: 'Invoker Game Userscript',
    description:
      'An experiment in browser scripting that adds gameplay helpers to invoker-game.com.',
    stack: ['JavaScript', 'Tampermonkey'],
    href: 'https://github.com/OutTuna/Invoker-game-hack',
    category: 'Experiments',
    status: 'shipped',
  },
  {
    slug: 'password-generator',
    name: 'Password Generator',
    description:
      'A lightweight Android application for generating passwords. A focused utility built with Kotlin.',
    stack: ['Kotlin', 'Android'],
    href: 'https://github.com/OutTuna/password-generator-android',
    category: 'Experiments',
    status: 'shipped',
  },
  {
    slug: 'nixos',
    name: 'NixOS Server Configuration',
    description:
      'A declarative NixOS configuration for deploying and managing a server. Infrastructure kept in code.',
    stack: ['Nix', 'NixOS'],
    href: 'https://github.com/OutTuna/NixOS-ServerSideClient',
    category: 'Automation',
    status: 'shipped',
  },
  {
    slug: 'csharp-labs',
    name: 'C# Labs',
    description:
      'Laboratory assignments and learning exercises in C# and .NET.',
    stack: ['C#', '.NET'],
    href: 'https://github.com/OutTuna/CSharp_Labs',
    category: 'Experiments',
    status: 'shipped',
  },
  {
    slug: 'sda-ios',
    name: 'SDA iOS',
    description:
      'An iOS application built while learning Swift and exploring native app development.',
    stack: ['Swift', 'iOS'],
    href: 'https://github.com/OutTuna/SDA-IOS',
    category: 'Experiments',
    status: 'shipped',
  },
  {
    slug: 'data-course',
    name: 'Data Structures',
    description:
      'Coursework, laboratory assignments and experiments with data structures in C++.',
    stack: ['C++'],
    href: 'https://github.com/OutTuna/Data_Course',
    category: 'Experiments',
    status: 'shipped',
  },
  {
    slug: 'lap-tracker',
    name: 'LapTracker',
    description:
      'A Roblox Lua script for tracking racing laps and looking into lap times.',
    stack: ['Lua', 'Roblox'],
    href: 'https://github.com/OutTuna/LapTracker',
    category: 'Experiments',
    status: 'shipped',
  },
  {
    slug: 'soundcloud-downloader',
    name: 'SoundCloud Ultimate Downloader',
    description:
      'An earlier SoundCloud downloader with batch processing. Kept in the archive for reference.',
    stack: ['JavaScript'],
    href: 'https://github.com/OutTuna/SoundCloud-Ultimate-Downloader',
    category: 'Automation',
    status: 'archived',
  },
]
export const featuredProjects = projects.filter((project) => project.featured)
