import { Youtube, Rss } from 'lucide-react';
import type { Thread, SocialLink, Announcement } from './types';
import { XLogo, DiscordLogo, SubstackLogo } from './components/icons';

export const FEATURED_THREADS: Thread[] = [
  { id: 1, title: 'How $CRC is trying to make possible the core mission of Bitcoin', tag: 'Bitcoin', url: 'https://x.com/cryptoalchemy29/status/1967625717329379833', thumbnailUrl: 'https://pbs.twimg.com/media/G05dwrvWEAESMWv?format=jpg&name=medium' },
  { id: 2, title: 'Grinding for Airdrops, but NO WIN-WIN ?? 😔 Here is the remedy', tag: 'Smart Grinding', url: 'https://x.com/cryptoalchemy29/status/1753305066721964283', thumbnailUrl: 'https://pbs.twimg.com/media/GFT9ql2bEAA6wjf?format=jpg&name=medium' },
  { id: 3, title: 'Unfollow Them Immediately and You will Start Making Money.', tag: 'Self Reliance', url: 'https://x.com/cryptoalchemy29/status/1785668081861238965', thumbnailUrl: 'https://pbs.twimg.com/media/GMfxdfCWoAAjBat?format=jpg&name=medium' },
  { id: 4, title: 'Spamming Articles About Protocols Can Make You Money But Not wealth.', tag: 'Strategy', url: 'https://x.com/cryptoalchemy29/status/1968166164715991294', thumbnailUrl: 'https://pbs.twimg.com/media/G1BUr3RXUAAW1Ol?format=jpg&name=medium' },
];

export const YOUTUBE_SHORTS_IDS: string[] = [
  'cLwZTaOnUj0',
  'FE-ogxbI8eS87Gc8',
  'sqIVwbFDj7uI7-G_',
  'mTOXg6YyUxI',
  'LrzAJ_aXEfbf2twn',
  'McjaLqHESaQ',
];

export const ANNOUNCEMENTS: Announcement[] = [
    { date: 'JUL 25', text: 'New course "DeFi Security" released!', icon: '🔐' },
    { date: 'JUL 18', text: 'Thread on modular blockchains just dropped.', icon: '🧵' },
    { date: 'JUL 10', text: 'Cross-chain bridging video guide now live.', icon: '🎥' },
    { date: 'JUL 01', text: 'Launched the new "Crypto Alchemy" website!', icon: '🚀' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 1, name: 'X', url: 'https://x.com/cryptoalchemy29', icon: XLogo, color: '#FFFFFF' },
  { id: 2, name: 'YouTube', url: 'https://youtube.com/@cryptoalchemy29', icon: Youtube, color: '#FF0000' },
  { id: 3, name: 'Discord', url: 'https://discord.gg/uzBWHaNGen', icon: DiscordLogo, color: '#5865F2' },
  { id: 4, name: 'Farcaster', url: 'https://farcaster.xyz/ilhanx29', icon: Rss, color: '#8A63D2' },
  { id: 5, name: 'Substack', url: 'https://cryptoalchemy29.substack.com/', icon: 'https://substackcdn.com/image/fetch/$s_!xBQa!,w_500,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Fimg%2Fsubstack.png', color: '#C7A94A' },
];
