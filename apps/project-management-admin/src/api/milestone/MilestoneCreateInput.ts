import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type MilestoneCreateInput = {
  completionDate?: Date | null;
  description?: string | null;
  project?: ProjectWhereUniqueInput | null;
  title?: string | null;
};
