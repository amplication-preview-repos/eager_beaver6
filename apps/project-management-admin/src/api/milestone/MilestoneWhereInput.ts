import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type MilestoneWhereInput = {
  completionDate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  title?: StringNullableFilter;
};
