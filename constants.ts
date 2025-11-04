import type { Thread, SocialLink, Announcement } from './types';
import { XLogo, DiscordLogo } from './components/icons';
import { Youtube, Rss, Mail, Heart } from 'lucide-react';

export const FEATURED_THREADS: Thread[] = [
  {
    id: 1,
    title: "Deconstructing Yield Farming: A Deep Dive into DeFi's Core Engine",
    tag: 'DeFi',
    url: 'https://x.com/',
  },
  {
    id: 2,
    title: 'The Future of On-Chain Identity: Beyond NFTs and ENS',
    tag: 'Identity',
    url: 'https://x.com/',
  },
  {
    id: 3,
    title: "MEV, PBS, and the Endgame for Ethereum's Transaction Supply Chain",
    tag: 'Ethereum',
    url: 'https://x.com/',
  },
  {
    id: 4,
    title: 'A Tokenomic Teardown: Analyzing the Sustainability of New-Gen Protocols',
    tag: 'Tokenomics',
    url: 'https://x.com/',
  },
];

export const YOUTUBE_SHORTS_IDS: string[] = [
  'rokGy0huYEA',
  '3tmd-ClpJxA',
  '9bZkp7q19f0',
  'U-O3o_HeXoQ',
  'pXRviuL6vMY',
  'M7lc1qf-27I'
];


export const ANNOUNCEMENTS: Announcement[] = [
  { date: 'OCT 2024', text: 'Launched a new research paper on modular blockchains.', icon: '📄' },
  { date: 'SEP 2024', text: 'Speaking at Devcon 7 in Bangkok.', icon: '🎙️' },
  { date: 'JUL 2024', text: 'My work was featured on The Defiant.', icon: '📰' },
  { date: 'JUN 2024', text: 'Crossed 100k followers on X. Thank you!', icon: '🎉' },
  { date: 'APR 2024', text: 'Published an in-depth guide to Restaking.', icon: '✍️' },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { id: 1, name: 'X', url: 'https://x.com/', icon: XLogo, color: '#FFFFFF' },
    { id: 2, name: 'YouTube', url: 'https://youtube.com', icon: Youtube, color: '#FF0000' },
    { id: 3, name: 'Discord', url: 'https://discord.com', icon: DiscordLogo, color: '#5865F2' },
    { id: 4, name: 'Farcaster', url: 'https://www.farcaster.xyz/', icon: Rss, color: '#8A63D2' },
    { id: 5, name: 'Email', url: 'mailto:cryptoalchemy@example.com', icon: Mail, color: '#C7A94A' },
];
