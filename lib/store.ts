
import { Project } from '../types';

const STORAGE_KEY = 'mv_portfolio_data';

export const store = {
  getProjects: (): Project[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return DEFAULT_PROJECTS;
    try {
      return JSON.parse(data);
    } catch {
      return DEFAULT_PROJECTS;
    }
  },
  saveProject: (project: Project) => {
    const projects = store.getProjects();
    const existingIndex = projects.findIndex(p => p.id === project.id);
    if (existingIndex > -1) {
      projects[existingIndex] = project;
    } else {
      projects.unshift(project);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  },
  deleteProject: (id: string) => {
    const projects = store.getProjects().filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }
};

const DEFAULT_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Viral Loop',
    client: 'Apex Fitness',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    type: 'direct',
    results: '1.2M Views',
    tags: ['Fitness', 'Viral', 'Dynamic'],
    createdAt: Date.now()
  },
  {
    id: '2',
    title: 'Podcast Highlights',
    client: 'The Modern Mind',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    type: 'direct',
    results: '850K Reach',
    tags: ['Podcast', 'Storytelling'],
    createdAt: Date.now() - 1000
  },
  {
    id: '3',
    title: 'Urban Aesthetics',
    client: 'StreetWear Co.',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    type: 'direct',
    results: '15K Saves',
    tags: ['Brand', 'Cinematic'],
    createdAt: Date.now() - 2000
  }
];
