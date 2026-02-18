
import { Project, Service, Stat } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Urban Pulse',
    client: 'HyperReal Media',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    type: 'direct',
    thumbnail: 'https://picsum.photos/id/1/800/600',
    results: '2.4M Views, 150k Shares',
    tags: ['Dynamic Reels'],
    createdAt: Date.now()
  },
  {
    id: '2',
    title: 'Minimalist Future',
    client: 'Aether Tech',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    type: 'direct',
    thumbnail: 'https://picsum.photos/id/2/800/600',
    results: '1.2M Views, 98% Positive Feedback',
    tags: ['Product Launch'],
    createdAt: Date.now()
  },
  {
    id: '3',
    title: 'Vibrant Escape',
    client: 'Nomad Journals',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    type: 'direct',
    thumbnail: 'https://picsum.photos/id/3/800/600',
    results: '500k Views, Featured on Travel+Leisure',
    tags: ['Travel Documentary'],
    createdAt: Date.now()
  },
  {
    id: '4',
    title: 'Cyber Circuit',
    client: 'GamerX Global',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    type: 'direct',
    thumbnail: 'https://picsum.photos/id/4/800/600',
    results: '5.8M Views, 12k Event Signups',
    tags: ['Esports Trailer'],
    createdAt: Date.now()
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Short-form Content',
    description: 'Specialized editing for Reels/TikTok designed for viral retention.',
    icon: '📱'
  },
  {
    id: 2,
    title: 'Brand Storytelling',
    description: 'Crafting high-end commercials that define your brand identity.',
    icon: '✨'
  },
  {
    id: 3,
    title: 'Growth Strategy',
    description: 'Data-driven content structuring to maximize reach and conversion.',
    icon: '📈'
  },
  {
    id: 4,
    title: 'Content Repurposing',
    description: 'Transforming long-form videos into a machine of social snippets.',
    icon: '♻️'
  }
];

export const STATS: Stat[] = [
  { label: 'Total Followers', value: '450', suffix: 'K+' },
  { label: 'Total Views', value: '100', suffix: 'M+' },
  { label: 'Brand Partnerships', value: '50', suffix: '+' },
  { label: 'Avg Engagement', value: '8.4', suffix: '%' }
];

export const CLIENT_LOGOS = [
  'https://cdn.worldvectorlogo.com/logos/nike-11.svg',
  'https://cdn.worldvectorlogo.com/logos/adidas-8.svg',
  'https://cdn.worldvectorlogo.com/logos/beats-1.svg',
  'https://cdn.worldvectorlogo.com/logos/red-bull.svg',
  'https://cdn.worldvectorlogo.com/logos/monster-energy-3.svg'
];
