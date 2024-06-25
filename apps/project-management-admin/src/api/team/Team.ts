import { TeamMember } from "../teamMember/TeamMember";

export type Team = {
  createdAt: Date;
  id: string;
  name: string | null;
  teamMembers?: Array<TeamMember>;
  updatedAt: Date;
};
