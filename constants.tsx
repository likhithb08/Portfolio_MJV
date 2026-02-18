
import { Project, Service, Stat } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '100k Challenge',
    client: 'Personal Brand',
    url: '/videos/video1.mp4',
    type: 'direct',
    thumbnail: 'https://picsum.photos/id/1/800/600',
    results: 'Viral Hook Strategy',
    tags: ['Challenge', 'Growth'],
    createdAt: Date.now()
  },
  {
    id: '2',
    title: 'Diet Guide',
    client: 'Fitness Community',
    url: '/videos/video2.mp4',
    type: 'direct',
    thumbnail: 'https://picsum.photos/id/2/800/600',
    results: 'Top Lead Magnet',
    tags: ['Education', 'Fitness'],
    createdAt: Date.now()
  },
  {
    id: '3',
    title: 'Fitness Journey',
    client: 'Lifestyle',
    url: '/videos/video3.mp4',
    type: 'direct',
    thumbnail: 'https://picsum.photos/id/3/800/600',
    results: 'High Engagement',
    tags: ['Motivation', 'Lifestyle'],
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

export const DYNAMIC_VIDEOS = [
  {
    id: 'd1',
    title: 'High Energy Edits',
    src: '/videos/dynamic/video1.mp4', 
    poster: 'https://picsum.photos/id/10/400/700'
  },
  {
    id: 'd2',
    title: 'Visual Effects',
    src: '/videos/dynamic/video2.mp4',
    poster: 'https://picsum.photos/id/11/400/700'
  },
  {
    id: 'd3',
    title: 'Transition Mastery',
    src: '/videos/dynamic/video3.mp4',
    poster: 'https://picsum.photos/id/12/400/700'
  },
    {
    id: 'd4',
    title: 'Sound Design',
    src: '/videos/dynamic/video4.mp4',
    poster: 'https://picsum.photos/id/13/400/700'
  }
];

export const PODCAST_VIDEOS = [
  {
    id: 'p1',
    title: 'Deep Dive Clips',
    src: '/videos/podcast/video1.mp4',
    poster: 'https://picsum.photos/id/20/400/700'
  },
  {
    id: 'p2',
    title: 'Viral Snippets',
    src: '/videos/podcast/video2.mp4',
    poster: 'https://picsum.photos/id/21/400/700'
  },
  {
    id: 'p3',
    title: 'Interview Highlights',
    src: '/videos/podcast/video3.mp4',
    poster: 'https://picsum.photos/id/22/400/700'
  },
   {
    id: 'p4',
    title: 'Storytelling Moments',
    src: '/videos/podcast/video4.mp4',
    poster: 'https://picsum.photos/id/23/400/700'
  }
];

export const CLIENT_LOGOS = [
  'https://cdn.worldvectorlogo.com/logos/nike-11.svg',
  'https://cdn.worldvectorlogo.com/logos/adidas-8.svg',
  'https://cdn.worldvectorlogo.com/logos/beats-1.svg',
  'https://cdn.worldvectorlogo.com/logos/red-bull.svg',
  'https://cdn.worldvectorlogo.com/logos/monster-energy-3.svg'
];
