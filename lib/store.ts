import { Project } from '../types';
import { PROJECTS } from '../constants';

const STORAGE_KEY = 'mv_portfolio_data';

export const store = {
  getProjects: (): Project[] => {
    // For now, valid source of truth is the constants file to ensure updates are seen.
    // If we want to support admin editing later, we can re-enable local storage priority
    // or implement a versioning check.
    return PROJECTS;

    /* 
    // Original Logic (Commented out to force update)
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return PROJECTS;
    try {
      return JSON.parse(data);
    } catch {
      return PROJECTS;
    } 
    */
  },
  saveProject: (project: Project) => {
    // This functionality is temporarily limited since we are forcing constants
    // If admin panel is used, we might need to revisit this.
    console.warn("Saving to local storage is currently bypassed to ensure video updates.");
  },
  deleteProject: (id: string) => {
    console.warn("Deleting from local storage is currently bypassed.");
  }
};
