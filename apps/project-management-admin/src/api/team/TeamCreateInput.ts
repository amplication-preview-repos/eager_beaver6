import { TeamMemberCreateNestedManyWithoutTeamsInput } from "./TeamMemberCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  name?: string | null;
  teamMembers?: TeamMemberCreateNestedManyWithoutTeamsInput;
};
