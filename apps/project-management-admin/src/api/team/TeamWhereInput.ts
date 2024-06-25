import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TeamMemberListRelationFilter } from "../teamMember/TeamMemberListRelationFilter";

export type TeamWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  teamMembers?: TeamMemberListRelationFilter;
};
