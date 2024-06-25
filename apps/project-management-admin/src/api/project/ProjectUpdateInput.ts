import { MilestoneUpdateManyWithoutProjectsInput } from "./MilestoneUpdateManyWithoutProjectsInput";
import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  description?: string | null;
  endDate?: Date | null;
  milestones?: MilestoneUpdateManyWithoutProjectsInput;
  name?: string | null;
  startDate?: Date | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
};
