import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type TeamMemberUpdateInput = {
  email?: string | null;
  name?: string | null;
  role?: string | null;
  team?: TeamWhereUniqueInput | null;
};
