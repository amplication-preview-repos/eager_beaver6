import { SortOrder } from "../../util/SortOrder";

export type MilestoneOrderByInput = {
  completionDate?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
