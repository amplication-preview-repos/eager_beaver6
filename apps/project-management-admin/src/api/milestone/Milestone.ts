import { Project } from "../project/Project";

export type Milestone = {
  completionDate: Date | null;
  createdAt: Date;
  description: string | null;
  id: string;
  project?: Project | null;
  title: string | null;
  updatedAt: Date;
};
