import { Team } from "../team/Team";

export type TeamMember = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  role: string | null;
  team?: Team | null;
  updatedAt: Date;
};
