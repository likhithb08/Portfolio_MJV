
import { z } from 'zod';

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string().min(2, "Title is too short"),
  client: z.string().min(2, "Client name is required"),
  url: z.string().url("Must be a valid URL"),
  type: z.enum(['instagram', 'direct']),
  thumbnail: z.string().url().optional(),
  results: z.string(),
  tags: z.array(z.string()),
  createdAt: z.number()
});

export type Project = z.infer<typeof ProjectSchema>;

// Fix: Exported Service interface to fix Module '"./types"' has no exported member 'Service' error.
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Fix: Exported Stat interface to fix Module '"./types"' has no exported member 'Stat' error.
export interface Stat {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

export interface AppState {
  projects: Project[];
  isAdmin: boolean;
  filter: string;
}
