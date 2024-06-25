import { TeamMemberUpdateManyWithoutTeamsInput } from "./TeamMemberUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  name?: string | null;
  teamMembers?: TeamMemberUpdateManyWithoutTeamsInput;
};
