import { BookOpen, Code, Youtube, Mail, Rss, Heart } from 'lucide-react';
import type { Thread, SocialLink, Announcement } from './types';
import { XLogo, DiscordLogo } from './components/icons';

export const FEATURED_THREADS: Thread[] = [
  { id: 1, title: 'Deep Dive into EIP-4844: Proto-Danksharding Explained', tag: 'Ethereum', url: 'https://x.com/' },
  { id: 2, title: 'The Ultimate Guide to On-Chain Privacy with ZK-SNARKs', tag: 'Privacy', url: 'https://x.com/' },
  { id: 3, title: 'How Liquid Staking is Reshaping DeFi Yield Strategies', tag: 'DeFi', url: 'https://x.com/' },
  { id: 4, title: 'Airdrop Farming Masterclass: Techniques & Security', tag: 'Strategy', url: 'https://x.com/' },
];

export const YOUTUBE_SHORTS_IDS: string[] = [
  'LXb3EKWsInQ',
  '3JZ_D3pSS4U',
  'L_jWHffIx5E',
  't_S_cN2re4E',
  'V-Kup_u-i9U',
  'u9Mv98Gr5pY',
];

export const ANNOUNCEMENTS: Announcement[] = [
    { date: 'JUL 25', text: 'New course "DeFi Security" released!', icon: '🔐' },
    { date: 'JUL 18', text: 'Thread on modular blockchains just dropped.', icon: '🧵' },
    { date: 'JUL 10', text: 'Cross-chain bridging video guide now live.', icon: '🎥' },
    { date: 'JUL 01', text: 'Launched the new "Crypto Alchemy" website!', icon: '🚀' },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { id: 1, name: 'X', url: 'https://x.com/', icon: XLogo, color: '#FFFFFF' },
    { id: 2, name: 'YouTube', url: 'https://youtube.com', icon: Youtube, color: '#FF0000' },
    { id: 3, name: 'Discord', url: '#', icon: DiscordLogo, color: '#5865F2' },
    { id: 4, name: 'Farcaster', url: '#', icon: Rss, color: '#8A63D2' },
    { id: 5, name: 'Email', url: 'mailto:hello@example.com', icon: Mail, color: '#C7A94A' },
];
