import { Youtube, Rss, Mail } from 'lucide-react';
import { XLogo, DiscordLogo } from './components/icons';
import type { Announcement, SocialLink, Thread } from './types';

export const FEATURED_THREADS: Thread[] = [
  { id: 1, title: "The Hidden Mechanics of DeFi Liquidations", tag: "DeFi", url: "https://x.com/" },
  { id: 2, title: "Airdrop Farming: A Data-Driven Masterclass", tag: "Airdrops", url: "https://x.com/" },
  { id: 3, title: "Unpacking the Future of On-Chain Identity", tag: "Identity", url: "https://x.com/" },
  { id: 4, title: "Modular vs. Monolithic: The Real Trade-Offs", tag: "Infra", url: "https://x.com/" },
];

export const YOUTUBE_SHORTS_IDS: string[] = [
  "i-32_rA-k8A",
  "3JZ_D3ELwOQ",
  "kXYiU_JCYtU",
  "_u-7rWKnRGo",
  "v-2daC2v4aQ",
  "u9Mv98Gr5pY",
];

export const ANNOUNCEMENTS: Announcement[] = [
  { id: 1, date: "OCT 24", text: "New deep dive on modular blockchains released.", icon: "📜" },
  { id: 2, date: "OCT 18", text: "Featured on the 'Chain Reaction' podcast.", icon: "🎙️" },
  { id: 3, date: "OCT 12", text: "Crossed 50,000 followers on X.", icon: "🚀" },
  { id: 4, date: "OCT 05", text: "Speaking at ETHGlobal Online.", icon: "🌐" },
  { id: 5, date: "SEP 28", text: "Launched 'The Alchemy Circle' private group.", icon: "⚡" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 1, name: 'X', icon: XLogo, url: 'https://x.com/', color: '#FFFFFF' },
  { id: 2, name: 'YouTube', icon: Youtube, url: 'https://youtube.com/', color: '#FF0000' },
  { id: 3, name: 'Discord', icon: DiscordLogo, url: 'https://discord.com/', color: '#5865F2' },
  { id: 4, name: 'Farcaster', icon: Rss, url: 'https://www.farcaster.xyz/', color: '#8A63D2' },
  { id: 5, name: 'Email', icon: Mail, url: 'mailto:hello@example.com', color: '#C7A94A' },
];
